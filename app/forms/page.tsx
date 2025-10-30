"use client"

import Link from "next/link"
import { FileText, Download } from "lucide-react"

type FormItem = {
  name: string
  filename: string
  description: string
}

export default function Forms() {
  const forms: FormItem[] = [
    {
      name: "Intake Form",
      filename: "Intake Form.pdf",
      description: "Basic information about your background, current concerns, and therapy goals.",
    },
    {
      name: "Acknowledgement and Consent",
      filename: "Acknowledgement and Consent.pdf",
      description: "Acknowledgement of practice policies and consent for treatment.",
    },
    {
      name: "Patient Services Agreement",
      filename: "Patient Services Agreement.pdf",
      description: "Detailed agreement outlining the terms and conditions of therapy services.",
    },
    {
      name: "Telehealth Informed Consent",
      filename: "Telehealth Informed Consent.pdf",
      description: "Consent form for virtual therapy sessions and understanding of telehealth services.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-center mb-4">Patient Forms</h1>
        <p className="text-center text-lg mb-12 text-text-secondary max-w-2xl mx-auto">
          Please download, review, and complete the following forms before your first session. If you have any
          questions, feel free to reach out.
        </p>

        <div className="space-y-6">
          {forms.map((form, index) => (
            <div key={index} className="content-card hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-accent-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="mb-2">{form.name}</h3>
                  <p className="text-sm text-text-secondary mb-4">{form.description}</p>

                  <a
                    href={`/forms/${form.filename}`}
                    download
                    className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary/80 transition-colors font-medium text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-accent-primary/5 rounded-lg border border-accent-primary/10">
          <h3 className="mb-3 text-header-footer">Need Help?</h3>
          <p className="text-sm text-text-secondary mb-4">
            If you have any questions about these forms or need assistance completing them, please don't hesitate to
            reach out.
          </p>
          <Link href="/contact" className="cta-button inline-block">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
