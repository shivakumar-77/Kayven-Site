"use client";

import { useState, useEffect } from "react";
import { SITE_URL, EMAIL, socials } from "@/lib/site";
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

interface ContactFormProps {
  initialReason?: string;
}

export default function ContactForm({ initialReason }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    reason: "",
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

  // Categories for the button group
  const categories = [
    { id: "general", label: "General enquiries" },
    { id: "product", label: "Product feedback" },
    { id: "partnership", label: "Partnerships" },
    { id: "media", label: "Media" },
    { id: "investor", label: "Investors" },
    { id: "careers", label: "Careers" },
    { id: "get-started", label: "Get started" },
  ];

  // Initialize reason from URL query parameter (passed as prop)
  useEffect(() => {
    if (initialReason) {
      setFormData(prev => ({ ...prev, reason: initialReason }));
    }
  }, [initialReason]);

  // Handle category button click
  const handleCategoryClick = (categoryId: string) => {
    setFormData(prev => ({ ...prev, reason: categoryId }));
  };

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
    if (!formData.reason) {
      newErrors.reason = "Please select a reason";
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

      // Show confirmation message (we'll show after a delay, but we can also show immediately)
      setEmailOpened(true);
      // Note: We cannot know if the email client actually opened, but we show the message anyway.
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Left Column */}
      <div className="space-y-6">
        {/* Categories */}
        <div className="space-y-4">
          <p className="font-semibold mb-2">Reason for contacting</p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                aria-pressed={formData.reason === category.id ? "true" : "false"}
                className={`${formData.reason === category.id ? "bg-black text-white" : "border border-black hover:bg-black hover:text-white"} px-4 py-2 rounded text-sm transition-colors`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <p className="font-semibold mb-2">Email</p>
          <a
            href={`mailto:${EMAIL}`}
            className="flex items-center space-x-2 text-black hover:underline"
          >
            <EmailIcon className="w-5 h-5" />
            <span>{EMAIL}</span>
          </a>
        </div>

        {/* Company Social Links */}
        <div className="space-y-2">
          <p className="font-semibold mb-2">Follow Kayven</p>
          <div className="flex space-x-4">
            <a
              href={socials.company.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Opens Kayven's LinkedIn in a new tab"
              className="flex items-center space-x-2 text-black hover:underline"
            >
              <LinkedInIcon className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={socials.company.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Opens Kayven's Instagram in a new tab"
              className="flex items-center space-x-2 text-black hover:underline"
            >
              <InstagramIcon className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              href={socials.company.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Opens Kayven's X (Twitter) in a new tab"
              className="flex items-center space-x-2 text-black hover:underline"
            >
              {/* We don't have an X icon component, but we can use a placeholder or just text. For now, we'll use text. */}
              <span className="flex items-center space-x-2">
                {/* We'll use an X icon if we have one, but we don't. Let's just use text for now. */}
                X
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
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
              <span className="text-red-500">*</span>
            </label>
            <select
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={`border-b-2 border-black focus:border-b-4 focus:border-black px-2 py-2 w-full ${errors.reason ? "border-red-500" : ""}`}
              disabled
            >
              <option value="">Select a reason</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.label}
                </option>
              ))}
            </select>
            {errors.reason && (
              <p className="mt-1 text-sm text-red-500">{errors.reason}</p>
            )}
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
          <div className="mt-6 p-4 bg-black/5 rounded-lg">
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
    </>
  );
}