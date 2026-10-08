"use client";

import { useState, useEffect } from "react";
import { SITE_URL, EMAIL } from "@/lib/site";
import LinkedInIcon from "../components/LinkedInIcon";
import InstagramIcon from "../components/InstagramIcon";
import EmailIcon from "../components/EmailIcon";

type FormData = {
  name: string;
  email: string;
  company: string;
  reason: string;
  message: string;
};

interface GetStartedFormProps {
  initialReason?: string;
}

export default function GetStartedForm({ initialReason }: GetStartedFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    reason: initialReason ?? "get-started", // Preset reason
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailOpened, setEmailOpened] = useState(false);

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Initialize reason from URL query parameter (passed as prop)
  useEffect(() => {
    if (initialReason) {
      setFormData(prev => ({ ...prev, reason: initialReason }));
    }
  }, [initialReason]);

  // Validate form
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Build mailto URL
      const subject = `[${formData.reason}] ${formData.name}`;
      const body = `
	Name: ${formData.name}
	Email: ${formData.email}
	Company: ${formData.company || "Not provided"}
	Reason: ${formData.reason}
	Message: ${formData.message}
      `.trim();
      const mailtoUrl = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open email client
      window.location.href = mailtoUrl;

      // Show confirmation message
      setEmailOpened(true);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Three large buttons */}
      <div className="space-y-8">
        <div className="flex flex-col items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="btn-secondary w-full max-w-xs px-6 py-3"
          >
            Email us
          </a>
          <a
            href="https://www.instagram.com/kayven.ai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opens Kayven's Instagram in a new tab"
            className="btn-secondary w-full max-w-xs px-6 py-3 flex items-center justify-center gap-2"
          >
            <InstagramIcon className="w-5 h-5" />
            <span>Instagram</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kayven-ai-883aa5434/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Opens Kayven's LinkedIn in a new tab"
            className="btn-secondary w-full max-w-xs px-6 py-3 flex items-center justify-center gap-2"
          >
            <LinkedInIcon className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Contact form preset to "Get started" */}
        <div className="border border-black rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Get in touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="lbl">
                Name
                <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`border-b-2 border-black focus:border-b-4 focus:border-black px-2 py-2 w-full ${errors.name ? "border-red-500" : ""}`}
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="lbl">
                Email
                <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border-b-2 border-black focus:border-b-4 focus:border-black px-2 py-2 w-full ${errors.email ? "border-red-500" : ""}`}
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="company" className="lbl">
                Company (optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="border-b-2 border-black focus:border-b-4 focus:border-black px-2 py-2 w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="reason" className="lbl">
                Reason
              </label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border-b-2 border-black focus:border-b-4 focus:border-black px-2 py-2 w-full"
                disabled
              >
                <option value="get-started">Get started</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="lbl">
                Message
                <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`border-b-2 border-black focus:border-b-4 focus:border-black px-2 py-2 w-full h-24 ${errors.message ? "border-red-500" : ""}`}
                required
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`btn-primary w-full py-3 ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Email confirmation message */}
          {emailOpened && (
            <div className="mt-4 p-4 bg-black/5 rounded-lg">
              <p className="text-white">
                Your email app should open. If it does not, write to{" "}
                <a href={`mailto:${EMAIL}`} className="underline">
                  {EMAIL}
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}