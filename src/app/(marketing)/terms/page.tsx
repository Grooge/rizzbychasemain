import { Metadata } from "next";
import Link from "next/link";
import {
  LegalPageLayout,
  LegalSection,
  LegalSubsection,
  LegalList,
} from "@/components/pages/legal";

export const metadata: Metadata = {
  title: "Terms of Service | Rizz by Chase",
  description:
    "Terms and conditions for using Rizz by Chase dating photo transformation services.",
};

const tocItems = [
  { id: "agreement", title: "Agreement to Terms" },
  { id: "eligibility", title: "Eligibility" },
  { id: "services", title: "Service Description" },
  { id: "account", title: "Account Responsibilities" },
  { id: "photos", title: "Photo Submissions" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "payment", title: "Payment Terms" },
  { id: "refunds", title: "Refunds" },
  { id: "no-guarantees", title: "No Outcome Guarantees" },
  { id: "prohibited", title: "Prohibited Uses" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "disputes", title: "Dispute Resolution" },
  { id: "modifications", title: "Modifications" },
  { id: "termination", title: "Termination" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      lastUpdated="January 2026"
      description="Please read these terms carefully before using our services."
      tocItems={tocItems}
    >
      <LegalSection id="agreement" title="Agreement to Terms">
        <p>
          Welcome to Rizz by Chase. These Terms of Service (&quot;Terms&quot;) govern your use of
          our website, services, and any related offerings provided by Rizz by Chase LLC
          (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
        </p>
        <p>
          By accessing or using our services, you agree to be bound by these Terms. If you do
          not agree to these Terms, you may not access or use our services. We recommend that
          you print or save a copy of these Terms for your records.
        </p>
        <p>
          We may update these Terms from time to time. We will notify you of material changes
          by posting the updated Terms on our website. Your continued use of our services
          after such changes constitutes acceptance of the updated Terms.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="Eligibility">
        <p>To use our services, you must:</p>
        <LegalList
          items={[
            "Be at least 18 years of age",
            "Have the legal capacity to enter into a binding contract",
            "Not be prohibited from using our services under applicable law",
            "Provide accurate and complete information when creating an account or placing an order",
          ]}
        />
        <p className="mt-4">
          By using our services, you represent and warrant that you meet all eligibility
          requirements.
        </p>
      </LegalSection>

      <LegalSection id="services" title="Service Description">
        <p>
          Rizz by Chase provides AI-powered photo transformation services designed to enhance
          dating profile photos. Our services include:
        </p>
        <LegalList
          items={[
            "Photo analysis and enhancement using AI technology",
            "Human review and quality assurance by our team",
            "Multiple revision rounds (varies by tier)",
            "Scenario-based photo creation",
            "Strategy consultations (Pro and Premium tiers)",
            "Profile optimization guidance (Premium tier)",
          ]}
        />
        <p className="mt-4">
          The specific deliverables and features included in your purchase depend on the
          service tier selected. Please review your selected tier&apos;s features before
          purchase.
        </p>
      </LegalSection>

      <LegalSection id="account" title="Account Responsibilities">
        <p>When you create an account with us, you agree to:</p>
        <LegalList
          items={[
            "Provide accurate, current, and complete information",
            "Maintain the security of your account credentials",
            "Promptly update your information if it changes",
            "Accept responsibility for all activities under your account",
            "Notify us immediately of any unauthorized access",
          ]}
        />
        <p className="mt-4">
          You may only create one account per person. We reserve the right to suspend or
          terminate accounts that violate these Terms.
        </p>
      </LegalSection>

      <LegalSection id="photos" title="Photo Submissions & User Content">
        <p>
          When you submit photos to our service, you represent and warrant that:
        </p>
        <LegalList
          items={[
            "You own the rights to the photos or have permission to use them",
            "The photos are of yourself (not others without their explicit consent)",
            "The photos do not contain illegal, offensive, or inappropriate content",
            "The photos do not infringe on any third party's intellectual property rights",
          ]}
        />

        <LegalSubsection title="License Grant">
          <p>
            By submitting photos, you grant us a non-exclusive, royalty-free license to use,
            process, modify, and transform your photos solely for the purpose of providing
            our services to you. This license terminates upon completion of services and
            deletion of your photos from our systems.
          </p>
        </LegalSubsection>

        <LegalSubsection title="Content Rejection">
          <p>
            We reserve the right to reject any submitted content that we determine, in our
            sole discretion, violates these Terms or is otherwise unsuitable for our
            services. In such cases, you may be entitled to a refund per our Refund Policy.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="intellectual-property" title="Intellectual Property">
        <LegalSubsection title="Your Original Photos">
          <p>
            You retain full ownership of your original photos. We do not claim any ownership
            rights to the photos you submit.
          </p>
        </LegalSubsection>

        <LegalSubsection title="Generated/Transformed Photos">
          <p>
            Upon full payment for our services, you receive a perpetual, non-exclusive
            license to use the transformed photos we create for you for personal use,
            including on dating platforms, social media, and professional networking sites.
            You may not resell, sublicense, or commercially distribute these images without
            our written consent.
          </p>
        </LegalSubsection>

        <LegalSubsection title="Our Intellectual Property">
          <p>
            All content on our website, including but not limited to text, graphics, logos,
            images, software, and the design and arrangement thereof, is the property of
            Rizz by Chase LLC and is protected by intellectual property laws. You may not:
          </p>
          <LegalList
            items={[
              "Copy, reproduce, or distribute our content without permission",
              "Reverse engineer our processes or technology",
              "Use our trademarks or branding without authorization",
              "Create derivative works based on our proprietary methods",
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="payment" title="Payment Terms">
        <p>
          All payments are processed securely through Stripe. By making a purchase, you
          agree to:
        </p>
        <LegalList
          items={[
            "Pay all fees at the prices in effect at the time of purchase",
            "Provide valid payment information",
            "Authorize us to charge your payment method for the total amount",
          ]}
        />
        <p className="mt-4">
          All prices are displayed in US Dollars (USD). Sales tax may apply based on your
          location. Prices are subject to change without notice, but changes will not affect
          orders already placed.
        </p>
      </LegalSection>

      <LegalSection id="refunds" title="Refunds">
        <p>
          We offer a satisfaction guarantee on our services. For complete details on refund
          eligibility, process, and timelines, please see our{" "}
          <Link href="/refund" className="text-amber hover:text-amber-light">
            Refund Policy
          </Link>
          .
        </p>
        <p>
          In summary: If you complete all available revision rounds and are still not
          satisfied with your results, you may request a full refund. Once you request
          watermark-free versions of your images (signifying acceptance), you are no longer
          eligible for a refund.
        </p>
      </LegalSection>

      <LegalSection id="no-guarantees" title="No Outcome Guarantees">
        <p className="font-medium text-cream">
          Important: We do not guarantee any specific dating outcomes.
        </p>
        <p>
          While our photos are designed to improve your dating profile presentation, we
          cannot and do not guarantee:
        </p>
        <LegalList
          items={[
            "Any specific number of matches, likes, or messages",
            "Success in finding romantic partners",
            "Specific responses from dating app algorithms",
            "Any particular dating or relationship outcomes",
          ]}
        />
        <p className="mt-4">
          Dating success depends on many factors beyond profile photos, including your bio,
          messaging style, location, preferences, and personal chemistry with potential
          matches. Our photos are tools designed to present you in your best light; they are
          not guarantees of romantic success.
        </p>
        <p className="mt-4">
          You are solely responsible for how you use the photos we provide and for all
          interactions on dating platforms.
        </p>
      </LegalSection>

      <LegalSection id="prohibited" title="Prohibited Uses">
        <p>You agree not to use our services to:</p>
        <LegalList
          items={[
            "Submit photos of others without their explicit consent",
            "Create fraudulent or misleading dating profiles",
            "Engage in catfishing or identity misrepresentation",
            "Resell, redistribute, or commercially exploit our work",
            "Reverse engineer, decompile, or attempt to extract our methods or technology",
            "Harass, threaten, or abuse our team members",
            "Violate any applicable laws or regulations",
            "Circumvent any security measures or access controls",
            "Use our services for any illegal purpose",
          ]}
        />
        <p className="mt-4">
          Violation of these prohibited uses may result in immediate termination of services
          without refund and may be reported to appropriate authorities.
        </p>
      </LegalSection>

      <LegalSection id="confidentiality" title="Confidentiality">
        <p>
          Our service methods, techniques, and strategies shared during consultations are
          proprietary and confidential. You agree to:
        </p>
        <LegalList
          items={[
            "Keep all information shared during strategy sessions confidential",
            "Not share, teach, or distribute our methods to others",
            "Not record consultations without our explicit written consent",
            "Not use our strategies to compete with our business",
          ]}
        />
      </LegalSection>

      <LegalSection id="liability" title="Limitation of Liability">
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, RIZZ BY CHASE LLC AND ITS OFFICERS,
          DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR:
        </p>
        <LegalList
          items={[
            "Any indirect, incidental, special, consequential, or punitive damages",
            "Any loss of profits, revenue, data, or use",
            "Any dating or relationship outcomes resulting from use of our services",
            "Any third-party actions or conduct on dating platforms",
            "Any damages arising from your violation of these Terms",
          ]}
        />
        <p className="mt-4">
          OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM OR RELATING TO THESE TERMS OR OUR
          SERVICES SHALL NOT EXCEED THE TOTAL AMOUNT YOU PAID TO US FOR THE SERVICES GIVING
          RISE TO THE CLAIM.
        </p>
        <p className="mt-4">
          Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any
          kind, either express or implied.
        </p>
      </LegalSection>

      <LegalSection id="indemnification" title="Indemnification">
        <p>
          You agree to indemnify, defend, and hold harmless Rizz by Chase LLC and its
          officers, directors, employees, and agents from and against any claims, damages,
          losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees)
          arising from:
        </p>
        <LegalList
          items={[
            "Your use of our services",
            "Your violation of these Terms",
            "Your violation of any third-party rights",
            "Any content you submit to us",
            "Your conduct on dating platforms using our photos",
          ]}
        />
      </LegalSection>

      <LegalSection id="disputes" title="Dispute Resolution">
        <LegalSubsection title="Informal Resolution">
          <p>
            Before initiating any formal dispute resolution, you agree to first contact us at{" "}
            <a
              href="mailto:chase@rizzbychase.com"
              className="text-amber hover:text-amber-light"
            >
              chase@rizzbychase.com
            </a>{" "}
            to attempt to resolve the dispute informally. Most concerns can be quickly
            resolved this way.
          </p>
        </LegalSubsection>

        <LegalSubsection title="Binding Arbitration">
          <p>
            If informal resolution is unsuccessful, any dispute, controversy, or claim
            arising out of or relating to these Terms or our services shall be resolved by
            binding individual arbitration. You agree that:
          </p>
          <LegalList
            items={[
              "Arbitration will be conducted on an individual basis only",
              "Class actions and class arbitrations are waived",
              "The arbitrator's decision will be final and binding",
              "Judgment on the arbitration award may be entered in any court of competent jurisdiction",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Class Action Waiver">
          <p>
            YOU AGREE TO RESOLVE DISPUTES WITH US ON AN INDIVIDUAL BASIS ONLY AND WAIVE ANY
            RIGHT TO PARTICIPATE IN CLASS ACTIONS, CLASS ARBITRATIONS, OR REPRESENTATIVE
            ACTIONS.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="modifications" title="Service Modifications">
        <p>We reserve the right to:</p>
        <LegalList
          items={[
            "Modify, suspend, or discontinue any aspect of our services",
            "Update features, pricing, or service tiers",
            "Change third-party service providers",
            "Implement new requirements for service use",
          ]}
        />
        <p className="mt-4">
          We will provide reasonable notice for material changes. Changes will not affect
          orders already in progress unless required by law or to protect our services.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="Termination">
        <p>
          We may suspend or terminate your account and access to our services immediately,
          without prior notice, if:
        </p>
        <LegalList
          items={[
            "You violate these Terms",
            "You engage in prohibited uses",
            "We are required to do so by law",
            "We discontinue our services",
          ]}
        />
        <p className="mt-4">
          You may close your account at any time by contacting us. Upon termination, your
          right to use our services immediately ceases. Sections of these Terms that by
          their nature should survive termination will survive, including intellectual
          property, limitation of liability, indemnification, and dispute resolution.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="Governing Law">
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the
          United States and the State of Delaware, without regard to conflict of law
          principles.
        </p>
        <p>
          For any matters not subject to arbitration, you consent to the exclusive
          jurisdiction of the state and federal courts located in Delaware.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact Information">
        <p>
          If you have any questions about these Terms of Service, please contact us:
        </p>
        <div className="mt-4 p-4 bg-navy-light rounded-lg border border-white/10">
          <p className="text-cream font-medium">Rizz by Chase LLC</p>
          <p className="mt-2">
            Email:{" "}
            <a
              href="mailto:chase@rizzbychase.com"
              className="text-amber hover:text-amber-light"
            >
              chase@rizzbychase.com
            </a>
          </p>
        </div>
      </LegalSection>
    </LegalPageLayout>
  );
}
