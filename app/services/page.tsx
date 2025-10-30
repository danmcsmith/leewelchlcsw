"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

type FAQItem = {
  question: string
  answer: string
}

export default function Services() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs: FAQItem[] = [
    {
      question: "How long does therapy typically last?",
      answer:
        "I specialize in medium to long-term therapy, typically ranging from 6 months to several years, depending on individual needs.",
    },
    {
      question: "Do you accept insurance?",
      answer: "I'm in-network with Cigna and can be reimbursed by most out-of-network insurance providers.",
    },
    {
      question: "Do you offer a free consultation?",
      answer: "Yes, I provide a complimentary introductory phone session to discuss your needs.",
    },
    {
      question: "What can I expect in the first session?",
      answer:
        "The initial session is an opportunity for us to get to know each other and discuss what brings you to therapy. I'll ask questions about your current concerns, relevant history, and goals for therapy. You'll have the chance to ask questions about my approach and determine if we're a good fit to work together.",
    },
    {
      question: "Do you offer virtual sessions?",
      answer:
        "Yes, I offer secure video sessions for clients who prefer teletherapy or who are unable to attend in-person appointments. I work remotely Tuesday through Thursday, and offer in-person sessions on Mondays.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center mb-8">Services</h1>

      <section className="space-y-8 mb-16 max-w-4xl mx-auto">
        <div className="content-card">
          <h3 className="mb-4">Individual Psychotherapy - $200 per session</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-header-footer">Depth-Oriented Approach</h4>
              <p className="text-sm">
                Focus on personal growth and self-understanding through exploration of unconscious patterns and deeper
                psychological processes.
              </p>
            </div>
            <div className="border-t border-header-footer/10 pt-4">
              <h4 className="font-medium mb-2 text-header-footer">Areas of Focus</h4>
              <p className="text-sm">
                Addressing depression, anxiety, life transitions, relationship challenges, and personal development
                through individualized treatment. Sliding scale options available.
              </p>
            </div>
          </div>
        </div>

        <div className="content-card">
          <h3 className="mb-4">Couples Therapy - $225 per session</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-header-footer">Relationship Dynamics</h4>
              <p className="text-sm">
                Improving relationship dynamics through understanding patterns of interaction and communication between
                partners.
              </p>
            </div>
            <div className="border-t border-header-footer/10 pt-4">
              <h4 className="font-medium mb-2 text-header-footer">Communication Enhancement</h4>
              <p className="text-sm">
                Resolving communication challenges and developing healthier ways to express needs, concerns, and
                emotions within the relationship.
              </p>
            </div>
            <div className="border-t border-header-footer/10 pt-4">
              <h4 className="font-medium mb-2 text-header-footer">Emotional Connection</h4>
              <p className="text-sm">
                Deepening emotional connection and intimacy while addressing conflicts and building stronger partnership
                foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-center mb-8">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="content-card">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openFAQ === index}
              >
                <h3>{faq.question}</h3>
                <ChevronDown
                  className={`h-5 w-5 transition-transform text-accent-primary ${openFAQ === index ? "rotate-180" : ""}`}
                />
              </button>

              {openFAQ === index && (
                <div className="mt-4 pt-4 border-t border-header-footer/10">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="mb-4">Ready to Begin Your Journey?</h2>
        <p className="mb-8">Take the first step toward transformative healing and personal growth.</p>
        <Link href="/contact" className="cta-button inline-block">
          Schedule a Free 30-Minute Consultation
        </Link>
      </section>
    </div>
  )
}
