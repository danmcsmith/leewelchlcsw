import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section - Split Screen */}
      <section className="flex flex-col lg:flex-row items-center gap-8 mb-16">
        <div className="w-full lg:w-1/2">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/images/lee-welch-profile.jpg"
              alt="Lee Welch, LCSW - Licensed Clinical Social Worker"
              width={600}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="mb-4">Welcome to Transformative Healing</h1>
          <p className="text-lg mb-6">
            Lee Welch is a licensed psychotherapist with nearly 30 years of experience in depth-oriented,
            Jungian-inspired psychological work. Specializing in individual and couples therapy, Lee offers a
            compassionate, insightful approach to personal growth and healing.
          </p>
          <Link href="/contact" className="cta-button inline-block">
            Schedule a Free 30-Minute Consultation
          </Link>
        </div>
      </section>

      {/* Content Cards */}
      <section className="space-y-8 mb-16">
        <div className="content-card">
          <h3 className="mb-4">Therapy Services</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2 text-header-footer">Individual Psychotherapy</h4>
              <p className="text-sm">
                Depth-oriented approach focusing on personal growth and self-understanding. Addressing depression,
                anxiety, and life transitions.
              </p>
            </div>
            <div className="border-t border-header-footer/10 pt-4">
              <h4 className="font-medium mb-2 text-header-footer">Couples Therapy</h4>
              <p className="text-sm">
                Improving relationship dynamics, resolving communication challenges, and deepening emotional connection.
              </p>
            </div>
          </div>
        </div>

        <div className="content-card">
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
      </section>

      {/* Why Choose Section */}
      <section className="bg-header-footer text-background-base rounded-lg p-8 mb-16">
        <h2 className="text-center mb-6 text-background-base">Why Choose Depth-Oriented Therapy?</h2>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Discover a therapeutic approach that goes beyond symptom management. Lee's practice focuses on understanding
          the deeper meanings behind life's challenges, helping you:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4 p-4 bg-background-base/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-background-base/15 hover:shadow-md hover:scale-[1.02] cursor-pointer">
            <div className="flex-shrink-0 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center">
              <span className="text-background-base font-serif text-lg">•</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium mb-2 text-background-base">Self-Discovery</h3>
              <p className="text-sm leading-relaxed">
                Uncover hidden aspects of your personality and develop deeper self-awareness
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-background-base/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-background-base/15 hover:shadow-md hover:scale-[1.02] cursor-pointer">
            <div className="flex-shrink-0 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center">
              <span className="text-background-base font-serif text-lg">•</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium mb-2 text-background-base">Life Transitions</h3>
              <p className="text-sm leading-relaxed">Navigate major life changes with confidence and clarity</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-background-base/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-background-base/15 hover:shadow-md hover:scale-[1.02] cursor-pointer">
            <div className="flex-shrink-0 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center">
              <span className="text-background-base font-serif text-lg">•</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium mb-2 text-background-base">Personal Growth</h3>
              <p className="text-sm leading-relaxed">Develop greater self-understanding and emotional intelligence</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-background-base/10 rounded-lg backdrop-blur-sm transition-all duration-300 hover:bg-background-base/15 hover:shadow-md hover:scale-[1.02] cursor-pointer">
            <div className="flex-shrink-0 w-8 h-8 bg-accent-primary rounded-full flex items-center justify-center">
              <span className="text-background-base font-serif text-lg">•</span>
            </div>
            <div>
              <h3 className="font-serif text-lg font-medium mb-2 text-background-base">Psychological Wholeness</h3>
              <p className="text-sm leading-relaxed">
                Achieve integration and balance in your mental and emotional life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="content-card mb-16">
        <h3 className="mb-4">Professional Credentials</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2 text-header-footer">Education & Licensing</h4>
            <p className="text-sm">
              Licensed Clinical Social Worker (LCSW) in Oregon and New York with Master's in Social Work from NYU.
            </p>
          </div>
          <div className="border-t border-header-footer/10 pt-4">
            <h4 className="font-medium mb-2 text-header-footer">Specialized Training</h4>
            <p className="text-sm">
              Extensive training in Psychodynamic Therapy, Object Relations, Internal Family Systems, and Jungian
              Psychology with nearly 30 years of clinical experience.
            </p>
          </div>
          <div className="border-t border-header-footer/10 pt-4">
            <h4 className="font-medium mb-2 text-header-footer">Professional Experience</h4>
            <p className="text-sm">
              Depth-oriented psychotherapy practice specializing in individual and couples therapy, with focus on
              personal growth and psychological healing.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <h2 className="mb-4">Ready to Begin Your Journey?</h2>
        <p className="max-w-2xl mx-auto mb-8">Take the first step toward transformative healing and personal growth.</p>
        <Link href="/contact" className="cta-button inline-block">
          Schedule a Free 30-Minute Consultation
        </Link>
      </section>
    </div>
  )
}
