import { getDB } from "../config/db.js";

const COLLECTION_NAME = "messages";

/**
 * Insert a new contact message into MongoDB.
 * @param {Object} messageData
 * @param {string} messageData.name
 * @param {string} messageData.email
 * @param {string} messageData.subject
 * @param {string} messageData.message
 * @param {string} messageData.emailStatus - "pending" | "sent" | "failed"
 * @returns {Promise<Object>} Inserted document with _id
 */
export async function createMessage({ name, email, subject, message, emailStatus = "pending" }) {
  const db = getDB();
  const collection = db.collection(COLLECTION_NAME);

  const document = {
    name,
    email,
    subject,
    message,
    emailStatus,
    createdAt: new Date(),
  };

  const result = await collection.insertOne(document);
  return {
    _id: result.insertedId,
    ...document,
  };
}

/**
 * Update the email delivery status of a stored message.
 * @param {import("mongodb").ObjectId} messageId
 * @param {string} status - "sent" | "failed"
 * @param {string} [resendId] - Resend message ID
 * @param {string} [errorDetails] - Optional error summary
 */
export async function updateMessageEmailStatus(messageId, status, resendId = null, errorDetails = null) {
  const db = getDB();
  const collection = db.collection(COLLECTION_NAME);

  const updateFields = {
    emailStatus: status,
    emailUpdatedAt: new Date(),
  };

  if (resendId) updateFields.resendId = resendId;
  if (errorDetails) updateFields.emailError = errorDetails;

  return collection.updateOne(
    { _id: messageId },
    { $set: updateFields }
  );
}

export default {
  createMessage,
  updateMessageEmailStatus,
};
