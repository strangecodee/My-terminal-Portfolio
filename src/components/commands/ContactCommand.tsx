import React, { useState } from "react";
import type { ContactFormData } from "../../types/terminal";

export const ContactCommand: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store in localStorage for demo purposes
    const submissions = JSON.parse(
      localStorage.getItem("contactSubmissions") || "[]"
    );
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString(),
    });
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <div className="space-y-4 text-green-400">
        <div className="border border-green-400 p-4 rounded-sm">
          <h2 className="text-xl font-bold text-teal-400 mb-4">
            ✅ Message Sent Successfully!
          </h2>
          <div className="text-gray-300 space-y-2">
            <p>Thank you for reaching out, {formData.name}!</p>
            <p>
              I've received your message about "{formData.subject}" and will get
              back to you at {formData.email} as soon as possible.
            </p>
            <p className="text-teal-400">Expected response time: 24-48 hours</p>
          </div>
        </div>
        <div className="text-gray-400">
          💡 Feel free to explore more commands or check out my projects while
          you wait!
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 text-green-400">
      <div className="border border-green-400 p-4 rounded-sm">
        <h2 className="text-xl font-bold text-teal-400 mb-4">
          📧 Contact Anurag Maurya
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-teal-400 mb-1">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-sm px-3 py-2 text-green-400 focus:border-teal-400 focus:outline-hidden"
              placeholder="Your full name"
              disabled={isSubmitting}
            />
            {errors.name && (
              <div className="text-red-400 text-sm mt-1">{errors.name}</div>
            )}
          </div>

          <div>
            <label className="block text-teal-400 mb-1">Email *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-sm px-3 py-2 text-green-400 focus:border-teal-400 focus:outline-hidden"
              placeholder="your.email@example.com"
              disabled={isSubmitting}
            />
            {errors.email && (
              <div className="text-red-400 text-sm mt-1">{errors.email}</div>
            )}
          </div>

          <div>
            <label className="block text-teal-400 mb-1">Subject *</label>
            <select
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-sm px-3 py-2 text-green-400 focus:border-teal-400 focus:outline-hidden"
              disabled={isSubmitting}
            >
              <option value="">Select a subject</option>
              <option value="Job Opportunity - DevOps Engineer">
                Job Opportunity - DevOps Engineer
              </option>
              <option value="Job Opportunity - Cloud Engineer">
                Job Opportunity - Cloud Engineer
              </option>
              <option value="Project Collaboration">
                Project Collaboration
              </option>
              <option value="Technical Discussion">Technical Discussion</option>
              <option value="Freelance Work">Freelance Work</option>
              <option value="Other">Other</option>
            </select>
            {errors.subject && (
              <div className="text-red-400 text-sm mt-1">{errors.subject}</div>
            )}
          </div>

          <div>
            <label className="block text-teal-400 mb-1">Message *</label>
            <textarea
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={5}
              className="w-full bg-gray-800 border border-gray-600 rounded-sm px-3 py-2 text-green-400 focus:border-teal-400 focus:outline-hidden resize-none"
              placeholder="Tell me about the opportunity, project requirements, or just say hello!"
              disabled={isSubmitting}
            />
            {errors.message && (
              <div className="text-red-400 text-sm mt-1">{errors.message}</div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-teal-600 hover:bg-teal-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-sm font-semibold transition-colors"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            <button
              type="button"
              onClick={() => {
                setFormData({ name: "", email: "", subject: "", message: "" });
                setErrors({});
              }}
              disabled={isSubmitting}
              className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 text-white px-6 py-2 rounded-sm font-semibold transition-colors"
            >
              Clear
            </button>
          </div>
        </form>

        {isSubmitting && (
          <div className="mt-4 text-teal-400">
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-teal-400"></div>
              Sending your message...
            </div>
          </div>
        )}
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          📞 Direct Contact Information
        </h3>
        <div className="space-y-2 text-gray-300">
          <div>
            <span className="text-gray-400">Email:</span>{" "}
            <a
              href="mailto:annu.exe@gmail.com"
              className="text-teal-400 hover:underline"
            >
              annu.exe@gmail.com
            </a>
          </div>
          <div>
            <span className="text-gray-400">Phone:</span>{" "}
            <a
              href="tel:+919027252715"
              className="text-teal-400 hover:underline"
            >
              +91 9027252715
            </a>
          </div>
          <div>
            <span className="text-gray-400">LinkedIn:</span>{" "}
            <a
              href="https://linkedin.com/in/annuragmaurya"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/annuragmaurya
            </a>
          </div>
          <div>
            <span className="text-gray-400">GitHub:</span>{" "}
            <a
              href="https://github.com/strangecodee"
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/strangecodee
            </a>
          </div>
          <div>
            <span className="text-gray-400">Location:</span>{" "}
            <span className="text-gray-300">
              Bareilly, Uttar Pradesh, India
            </span>
          </div>
        </div>
      </div>

      <div className="border border-green-400 p-4 rounded-sm">
        <h3 className="text-lg font-bold text-teal-400 mb-3">
          💼 Open to Opportunities
        </h3>
        <div className="bg-gray-800 p-3 rounded-sm">
          <p className="text-gray-300 text-sm leading-relaxed">
            I'm actively seeking{" "}
            <strong className="text-teal-400">DevOps Engineer</strong> and{" "}
            <strong className="text-teal-400">Cloud Engineer</strong> positions.
            With AWS and GCP certifications, hands-on internship experience, and
            a passion for automation and infrastructure, I'm ready to contribute
            to your team's success.
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <span className="bg-orange-600 text-white px-2 py-1 rounded-sm text-xs">
            AWS Certified
          </span>
          <span className="bg-blue-600 text-white px-2 py-1 rounded-sm text-xs">
            GCP Certified
          </span>
          <span className="bg-green-600 text-white px-2 py-1 rounded-sm text-xs">
            Available Immediately
          </span>
          <span className="bg-purple-600 text-white px-2 py-1 rounded-sm text-xs">
            Remote/Hybrid Ready
          </span>
        </div>
      </div>

      <div className="text-gray-400">
        💡 All fields marked with * are required. I typically respond within
        24-48 hours.
      </div>
    </div>
  );
};
