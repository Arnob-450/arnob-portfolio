"use client";

/**
 * ContactSection.jsx
 * Complete frontend contact section with client-side form validation
 * and real backend integration with POST /api/contact.
 */

import { useState } from "react";
import personal from "@/data/personal";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error" | null
  const [statusMessage, setStatusMessage] = useState("");

  // Validate form fields on the client
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setStatusMessage("");

    // Read the API URL from environment variables, fallback to local backend port 5000
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

    try {
      const response = await fetch(`${apiUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Thank you! Your message has been sent successfully.");
        // Clear form only on verified success
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Failed to send your message. Please try again.");
      }
    } catch (networkError) {
      console.error("[Contact Form] Submission network error:", networkError);
      setSubmitStatus("error");
      setStatusMessage(
        "Unable to reach the server. Please check your connection or ensure the backend server is running."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitStatus(null);
    setStatusMessage("");
    setErrors({});
  };

  return (
    <div className="w-full">
      <div className="mb-12 text-center lg:text-left">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs font-semibold text-violet-300 mb-3">
          ✉ Contact Me
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Get In Touch
        </h2>
        <p className="mt-3 text-base text-[#A1A1AA] max-w-2xl">
          Interested in collaborating or have a question? Leave a message or reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {/* Direct Email Card */}
            <div className="rounded-3xl border border-white/10 bg-[#0E101D]/90 p-6 backdrop-blur-xl shadow-2xl hover:border-violet-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
                  ✉️
                </span>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Direct Email
                  </h4>
                  <p className="text-sm font-semibold text-white">
                    Send a note anytime
                  </p>
                </div>
              </div>
              <a
                href={`mailto:${personal.contact.email}`}
                className="mt-2 inline-block text-sm text-cyan-400 hover:text-cyan-300 font-medium break-all transition-colors"
              >
                {personal.contact.email}
              </a>
            </div>

            {/* University & Location Card */}
            <div className="rounded-3xl border border-white/10 bg-[#0E101D]/90 p-6 backdrop-blur-xl shadow-2xl hover:border-violet-500/30 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  📍
                </span>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Location &amp; Institution
                  </h4>
                  <p className="text-sm font-semibold text-white">
                    {personal.contact.location}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                {personal.education.university} (Software Engineering Dept)
              </p>
            </div>

            {/* Social Links Card */}
            <div className="rounded-3xl border border-white/10 bg-[#0E101D]/90 p-6 backdrop-blur-xl shadow-2xl hover:border-violet-500/30 transition-colors">
              <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Professional Profiles
              </h4>
              <div className="flex flex-col gap-2.5">
                <a
                  href={personal.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-[#121424] text-xs text-slate-300 hover:text-white hover:border-violet-500/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-violet-400" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub Profile</span>
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">↗</span>
                </a>

                <a
                  href={personal.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-[#121424] text-xs text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#0E101D]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl hover:border-violet-500/30 transition-all">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out the form below. All fields marked with{" "}
                  <span className="text-violet-400 font-semibold">*</span> are required.
                </p>
              </div>

              {/* Success Notification */}
              {submitStatus === "success" && (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-200 animate-fade-in"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                      Message Sent!
                    </span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-emerald-400 hover:underline"
                    >
                      Send another
                    </button>
                  </div>
                  <p className="text-xs text-emerald-300/80 leading-relaxed">
                    {statusMessage}
                  </p>
                </div>
              )}

              {/* Error Notification */}
              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="mb-6 rounded-lg border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-200 animate-fade-in"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-rose-400" />
                      Submission Error
                    </span>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-rose-300 hover:underline"
                    >
                      Dismiss
                    </button>
                  </div>
                  <p className="text-xs text-rose-300/90 leading-relaxed">
                    {statusMessage}
                  </p>
                </div>
              )}

              {/* Form Element */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5"
                  >
                    Your Name <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 bg-zinc-950/70 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/30 ${
                      errors.name
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-zinc-800 focus:border-violet-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <span>⚠</span> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5"
                  >
                    Your Email <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. john@example.com"
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 bg-zinc-950/70 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/30 ${
                      errors.email
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-zinc-800 focus:border-violet-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <span>⚠</span> {errors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5"
                  >
                    Subject <span className="text-violet-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Inquiry or Collaboration"
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 bg-zinc-950/70 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/30 ${
                      errors.subject
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-zinc-800 focus:border-violet-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <span>⚠</span> {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-zinc-300 mb-1.5"
                  >
                    Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    disabled={isSubmitting}
                    className={`w-full resize-none rounded-lg border px-4 py-2.5 text-sm text-zinc-100 placeholder-zinc-500 bg-zinc-950/70 outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/30 ${
                      errors.message
                        ? "border-rose-500/80 focus:border-rose-500"
                        : "border-zinc-800 focus:border-violet-500"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                      <span>⚠</span> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto min-w-[160px]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Submitting...</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>Send Message</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
