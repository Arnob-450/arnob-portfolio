import { createMessage, updateMessageEmailStatus } from "../models/message.model.js";
import { sendContactNotification } from "../services/email.service.js";

// Regular expression for validating standard email formats
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Constraints for field lengths
const LIMITS = {
  name: 100,
  email: 120,
  subject: 200,
  message: 3000,
};

/**
 * Handle POST /api/contact
 * Validates form submission, stores in MongoDB, and triggers Resend email notification.
 */
export async function submitContactMessage(req, res, next) {
  try {
    const { name, email, subject, message } = req.body || {};

    // 1. Validation - Presence check
    if (!name || typeof name !== "string" || !name.trim()) {
      return res.status(400).json({
        success: false,
        message: "Your name is required.",
      });
    }

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: "Your email address is required.",
      });
    }

    if (!subject || typeof subject !== "string" || !subject.trim()) {
      return res.status(400).json({
        success: false,
        message: "A subject is required.",
      });
    }

    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "A message is required.",
      });
    }

    // 2. Sanitization & Trimming
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedSubject = subject.trim();
    const trimmedMessage = message.trim();

    // 3. Email Format Validation
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    // 4. Length Limits Validation
    if (trimmedName.length > LIMITS.name) {
      return res.status(400).json({
        success: false,
        message: `Name cannot exceed ${LIMITS.name} characters.`,
      });
    }

    if (trimmedEmail.length > LIMITS.email) {
      return res.status(400).json({
        success: false,
        message: `Email cannot exceed ${LIMITS.email} characters.`,
      });
    }

    if (trimmedSubject.length > LIMITS.subject) {
      return res.status(400).json({
        success: false,
        message: `Subject cannot exceed ${LIMITS.subject} characters.`,
      });
    }

    if (trimmedMessage.length < 10) {
      return res.status(400).json({
        success: false,
        message: "Message must be at least 10 characters long.",
      });
    }

    if (trimmedMessage.length > LIMITS.message) {
      return res.status(400).json({
        success: false,
        message: `Message cannot exceed ${LIMITS.message} characters.`,
      });
    }

    // 5. Save message to MongoDB Atlas
    let savedMessage = null;
    try {
      savedMessage = await createMessage({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
        emailStatus: "pending",
      });
    } catch (dbError) {
      console.error("[Contact Controller] MongoDB insertion failed:", dbError.message);
      return res.status(500).json({
        success: false,
        message: "Unable to save your message due to a server storage error. Please try again later.",
      });
    }

    // 6. Send email notification via Resend
    let emailResult = { success: false };
    try {
      emailResult = await sendContactNotification({
        name: trimmedName,
        email: trimmedEmail,
        subject: trimmedSubject,
        message: trimmedMessage,
      });

      // Update message document with delivery result
      if (emailResult.success) {
        await updateMessageEmailStatus(savedMessage._id, "sent", emailResult.resendId);
      } else {
        await updateMessageEmailStatus(savedMessage._id, "failed", null, emailResult.error);
      }
    } catch (emailErr) {
      console.error("[Contact Controller] Resend dispatch caught error:", emailErr.message);
      await updateMessageEmailStatus(savedMessage._id, "failed", null, emailErr.message);
    }

    // 7. Formulate user-friendly response
    if (emailResult.success) {
      return res.status(201).json({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
    } else {
      // Message is safely stored in MongoDB, but Resend delivery failed
      return res.status(200).json({
        success: true,
        message: "Your message was received and saved! The notification email could not be sent at this moment.",
        emailDelivered: false,
      });
    }
  } catch (error) {
    next(error);
  }
}

export default {
  submitContactMessage,
};
