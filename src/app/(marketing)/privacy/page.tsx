import { Metadata } from "next";
import {
  LegalPageLayout,
  LegalSection,
  LegalSubsection,
  LegalList,
} from "@/components/pages/legal";

export const metadata: Metadata = {
  title: "Privacy Policy | Rizz by Chase",
  description:
    "Learn how Rizz by Chase collects, uses, and protects your personal information and photos.",
};

const tocItems = [
  { id: "overview", title: "Privacy Overview" },
  { id: "information-you-provide", title: "Information You Provide" },
  { id: "automatic-collection", title: "Automatic Collection" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "sharing", title: "Sharing Information" },
  { id: "your-choices", title: "Your Choices" },
  { id: "security", title: "Data Security" },
  { id: "us-operations", title: "US-Based Operations" },
  { id: "contact", title: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      lastUpdated="January 2026"
      description="Your privacy matters to us. This policy explains how we handle your information."
      tocItems={tocItems}
    >
      <LegalSection id="overview" title="Privacy Overview">
        <p>
          Rizz by Chase LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
          committed to protecting the personal information you share with us. This Privacy
          Policy explains how we collect, use, disclose, and safeguard your information when
          you use our website and photo transformation services.
        </p>
        <p>
          By using our services, you agree to the collection and use of information in
          accordance with this policy. If you do not agree with our policies and practices,
          please do not use our services.
        </p>
      </LegalSection>

      <LegalSection id="information-you-provide" title="Information You Provide">
        <p>
          We collect information you voluntarily provide when using our services:
        </p>

        <LegalSubsection title="Account Information">
          <LegalList
            items={[
              "Name and email address",
              "Password (encrypted)",
              "Communication preferences",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Photos and Media">
          <p>
            Our service requires you to submit photos for transformation. We collect and
            process these images solely to provide our photo enhancement services. Your
            photos are:
          </p>
          <LegalList
            items={[
              "Used exclusively to create your transformed images",
              "Stored securely on encrypted servers",
              "Never sold, shared, or used for any other purpose",
              "Deleted upon your request or after service completion (per our retention policy)",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Payment Information">
          <p>
            Payment processing is handled by Stripe, a PCI-compliant payment processor. We do
            not store your full credit card number or financial account information on our
            servers. We receive only:
          </p>
          <LegalList
            items={[
              "Last four digits of your card (for identification)",
              "Billing address",
              "Transaction confirmations",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Communications">
          <p>
            When you contact us or participate in strategy sessions (Pro/Premium tiers), we
            may collect:
          </p>
          <LegalList
            items={[
              "Email correspondence",
              "Notes from strategy sessions",
              "Feedback and testimonials (with your permission)",
            ]}
          />
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="automatic-collection" title="Information Collected Automatically">
        <p>
          When you visit our website, we automatically collect certain information:
        </p>

        <LegalSubsection title="Device Information">
          <LegalList
            items={[
              "Browser type and version",
              "Operating system",
              "Device type (mobile, desktop, tablet)",
              "Screen resolution",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Usage Data">
          <LegalList
            items={[
              "Pages visited and time spent",
              "Referring website or source",
              "Click patterns and interactions",
              "Error logs and performance data",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Cookies and Tracking">
          <p>
            We use cookies and similar tracking technologies to improve your experience:
          </p>
          <LegalList
            items={[
              "Essential cookies: Required for site functionality",
              "Analytics cookies: Help us understand how visitors use our site (Google Analytics)",
              "Marketing cookies: Used to deliver relevant advertisements",
            ]}
          />
          <p className="mt-3">
            You can control cookie preferences through your browser settings. Disabling
            certain cookies may affect site functionality.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="how-we-use" title="How We Use Your Information">
        <p>We use the information we collect to:</p>
        <LegalList
          items={[
            "Provide and deliver our photo transformation services",
            "Process payments and send transaction confirmations",
            "Communicate with you about your order and our services",
            "Provide customer support and respond to inquiries",
            "Send marketing communications (with your consent, and you can opt out anytime)",
            "Improve our website, services, and user experience",
            "Detect and prevent fraud or abuse",
            "Comply with legal obligations",
          ]}
        />
      </LegalSection>

      <LegalSection id="sharing" title="Sharing Your Information">
        <p>
          <strong className="text-cream">
            We never sell your personal information or photos.
          </strong>{" "}
          We may share your information only in the following limited circumstances:
        </p>

        <LegalSubsection title="Service Providers">
          <p>We work with trusted third parties who help us operate our business:</p>
          <LegalList
            items={[
              "Stripe: Payment processing (PCI-compliant)",
              "Google Analytics: Website analytics and performance",
              "Email service providers: Transactional and marketing emails",
              "Cloud hosting: Secure data storage",
            ]}
          />
          <p className="mt-3">
            These providers are contractually obligated to protect your information and use
            it only for the services they provide to us.
          </p>
        </LegalSubsection>

        <LegalSubsection title="Legal Requirements">
          <p>We may disclose your information if required by law, including:</p>
          <LegalList
            items={[
              "Court orders or legal process",
              "Government or regulatory requests",
              "Protection of our legal rights",
              "Emergency situations involving potential harm",
            ]}
          />
        </LegalSubsection>

        <LegalSubsection title="Business Transfers">
          <p>
            If we are involved in a merger, acquisition, or sale of assets, your information
            may be transferred as part of that transaction. We will notify you of any such
            change.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="your-choices" title="Your Choices">
        <LegalSubsection title="Account Information">
          <p>
            You can update your account information at any time by logging into your account
            or contacting us at{" "}
            <a
              href="mailto:chase@rizzbychase.com"
              className="text-amber hover:text-amber-light"
            >
              chase@rizzbychase.com
            </a>
            .
          </p>
        </LegalSubsection>

        <LegalSubsection title="Marketing Communications">
          <p>
            You can opt out of marketing emails by clicking the unsubscribe link in any
            marketing message or by contacting us. Note that you may still receive
            transactional emails related to your orders.
          </p>
        </LegalSubsection>

        <LegalSubsection title="Data Deletion">
          <p>
            You can request deletion of your personal information and photos by contacting
            us. We will process your request within 30 days, subject to any legal retention
            requirements.
          </p>
        </LegalSubsection>

        <LegalSubsection title="Do Not Track">
          <p>
            Our website does not currently respond to Do Not Track signals. You can control
            tracking through your browser settings and cookie preferences.
          </p>
        </LegalSubsection>
      </LegalSection>

      <LegalSection id="security" title="Data Security">
        <p>
          We implement appropriate technical and organizational measures to protect your
          personal information:
        </p>
        <LegalList
          items={[
            "Encryption in transit (TLS/SSL) and at rest",
            "Secure cloud infrastructure with access controls",
            "Regular security assessments and updates",
            "Limited employee access on a need-to-know basis",
            "Secure deletion procedures for photos and personal data",
          ]}
        />
        <p className="mt-4">
          While we strive to protect your information, no method of transmission or storage
          is 100% secure. If you believe your information has been compromised, please
          contact us immediately.
        </p>
      </LegalSection>

      <LegalSection id="us-operations" title="US-Based Operations">
        <p>
          Rizz by Chase LLC is based in the United States, and your information is processed
          and stored in the United States. By using our services, you acknowledge that your
          information will be transferred to and processed in the United States, where data
          protection laws may differ from those in your country.
        </p>
        <p>
          If you are located in the European Economic Area (EEA) or other regions with data
          protection laws, you have certain rights regarding your personal information. Please
          contact us to exercise these rights.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact Us">
        <p>
          If you have questions about this Privacy Policy or our data practices, please
          contact us:
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
        <p className="mt-4">
          We will respond to your inquiry within 30 days.
        </p>
      </LegalSection>
    </LegalPageLayout>
  );
}
