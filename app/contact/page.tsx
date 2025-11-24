"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Clock } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
    isLoading: boolean
  }>({
    submitted: false,
    success: false,
    message: "",
    isLoading: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setFormStatus({
      submitted: false,
      success: false,
      message: "",
      isLoading: true,
    })

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Contact Form Submission from ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone || "Not provided"}\n\n` +
          `Message:\n${formData.message}\n\n` +
          `---\nThis message was sent from the Lee Welch Therapy website contact form.`,
      )

      const mailtoLink = `mailto:lwelch211@gmail.com?subject=${subject}&body=${body}`

      // Open the user's email client
      window.location.href = mailtoLink

      // Show success message
      setFormStatus({
        submitted: true,
        success: true,
        message:
          "Your email client has been opened with your message. Please send the email to complete your submission. If your email client didn't open automatically, please email lwelch211@gmail.com directly.",
        isLoading: false,
      })

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message:
          "There was an issue opening your email client. Please email lwelch211@gmail.com directly with your message.",
        isLoading: false,
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center mb-8">Contact Me</h1>

      <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
        <div className="w-full lg:w-1/2">
          <div className="content-card h-full">
            <h2 className="mb-6">Get in Touch</h2>

            {formStatus.submitted && (
              <div
                className={`p-4 rounded-md mb-6 ${
                  formStatus.success
                    ? "bg-accent-primary/10 text-accent-primary border border-accent-primary/20"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    {formStatus.success ? (
                      <svg className="h-5 w-5 text-accent-primary mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg className="h-5 w-5 text-red-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">
                      {formStatus.success ? "Message Ready to Send!" : "Email Client Issue"}
                    </p>
                    <p className="text-sm mt-1">{formStatus.message}</p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={formStatus.isLoading}
                  className="w-full p-3 border border-header-footer/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary bg-background-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={formStatus.isLoading}
                  className="w-full p-3 border border-header-footer/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary bg-background-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-medium">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={formStatus.isLoading}
                  className="w-full p-3 border border-header-footer/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary bg-background-base disabled:opacity-50 disabled:cursor-not-allowed"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  disabled={formStatus.isLoading}
                  className="w-full p-3 border border-header-footer/10 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-primary bg-background-base disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Please describe what brings you to therapy and any questions you may have..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.isLoading}
                className="cta-button w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {formStatus.isLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Preparing Email...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            <div className="mt-6 p-4 bg-card-background/30 rounded-md">
              <p className="text-sm text-primary-text">
                <strong>Note:</strong> This form will open your default email client to send your message. Your message
                will be delivered securely and you can expect a response within 24-48 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="content-card">
            <h3 className="mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-accent-primary" />
                  <div>
                    <h4 className="font-medium mb-2 text-header-footer">Office Location</h4>
                    <p className="text-sm">Portland, Oregon</p>
                  </div>
                </div>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 mr-4 text-accent-primary" />
                  <div>
                    <h4 className="font-medium mb-2 text-header-footer">Office Hours</h4>
                    <p className="text-sm">Tuesday–Thursday (Remote)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
