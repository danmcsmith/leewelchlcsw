import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
        {/* Sticky Image Column - Left Side */}
        <div className="w-full lg:w-5/12 lg:order-1">
          <div className="lg:sticky lg:top-24">
            <div className="rounded-lg overflow-hidden shadow-md">
              <Image
                src="/images/lee-welch-profile.jpg"
                alt="Lee Welch, LCSW - Licensed Clinical Social Worker"
                width={450}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Scrollable Content Column - Right Side */}
        <div className="w-full lg:w-7/12 lg:order-2">
          <div className="content-card mb-8">
            <h3 className="mb-4">Credentials</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-header-footer">Education & Licensing</h4>
                <p className="text-sm">
                  Licensed Clinical Social Worker (LCSW) with Master of Social Work from NYU. Licensed in Oregon and
                  New York.
                </p>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <h4 className="font-medium mb-2 text-header-footer">Specialized Certifications</h4>
                <p className="text-sm">
                  Advanced certifications in Depth Psychology and specialized training in Jungian-oriented therapeutic
                  approaches.
                </p>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <h4 className="font-medium mb-2 text-header-footer">Clinical Experience</h4>
                <p className="text-sm">
                  Over 30 years of clinical experience in depth-oriented psychotherapy, individual and couples
                  therapy.
                </p>
              </div>
            </div>
          </div>

          <div className="content-card mb-8">
            <h3 className="mb-4">Trainings and Approaches</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-header-footer">Jungian-Oriented Therapy</h4>
                <p className="text-sm">
                  Explores the unconscious mind and focuses on individuation - the process of integrating different
                  aspects of your personality to become your most authentic self. This includes shadow work, which
                  helps you recognize and integrate the hidden or rejected parts of yourself, leading to greater
                  self-acceptance and psychological wholeness.
                </p>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <h4 className="font-medium mb-2 text-header-footer">Psychodynamic Counseling</h4>
                <p className="text-sm">
                  Examines how past experiences and unconscious thoughts influence current behavior, relationships, and
                  emotional patterns.
                </p>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <h4 className="font-medium mb-2 text-header-footer">Internal Family Systems (IFS)</h4>
                <p className="text-sm">
                  Views the mind as naturally composed of multiple sub-personalities or "parts," each with its own
                  perspective, feelings, and role. IFS helps you understand and heal internal conflicts by fostering
                  compassionate communication between parts while accessing your core Self - the calm, curious, and
                  compassionate center of who you are. This approach recognizes that there are no "bad" parts, only
                  parts that have taken on extreme roles to protect you from pain.
                </p>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <h4 className="font-medium mb-2 text-header-footer">Acceptance and Commitment Therapy (ACT)</h4>
                <p className="text-sm">
                  A mindfulness-based approach that helps you develop psychological flexibility - the ability to be
                  present with your thoughts and feelings without judgment while taking action guided by your values.
                  Rather than trying to eliminate difficult emotions, ACT teaches you to accept what is outside your
                  control and commit to actions that enrich your life. Through techniques like cognitive defusion and
                  values clarification, ACT empowers you to live a meaningful life even in the presence of discomfort.
                </p>
              </div>
            </div>
          </div>

          <div className="content-card">
            <h3 className="mb-4">Personal Philosophy</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2 text-header-footer">Therapeutic Journey</h4>
                <p className="text-sm">
                  Therapy is a journey of self-discovery where psychological challenges are viewed as opportunities for
                  growth and deeper understanding.
                </p>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <h4 className="font-medium mb-2 text-header-footer">Safe Space Creation</h4>
                <p className="text-sm">
                  My goal is to create a safe, compassionate space where you can explore your inner world without
                  judgment or pressure.
                </p>
              </div>
              <div className="border-t border-header-footer/10 pt-4">
                <h4 className="font-medium mb-2 text-header-footer">Transformative Potential</h4>
                <p className="text-sm">
                  Together, we unlock your potential for healing and transformation, moving beyond symptom management to
                  authentic growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link href="/contact" className="cta-button inline-block">
          Schedule a Free 30-Minute Consultation
        </Link>
      </div>
    </div>
  )
}
