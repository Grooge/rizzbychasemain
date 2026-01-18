import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle, ArrowRight, Mail, Clock } from "lucide-react";

function SuccessContent() {
  return (
    <div className="min-h-screen bg-navy-dark flex items-center justify-center py-20">
      <Container size="sm">
        <div className="text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            Welcome to Rizz by Chase!
          </h1>

          <p className="text-xl text-warm-gray-light mb-8 max-w-md mx-auto">
            Your payment was successful. We&apos;re excited to help you transform your dating profile.
          </p>

          {/* Next Steps */}
          <div className="bg-navy-light rounded-2xl p-8 mb-8 text-left border border-white/10">
            <h2 className="text-xl font-bold text-cream mb-6 text-center">
              What Happens Next
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Check Your Email</h3>
                  <p className="text-warm-gray text-sm">
                    You&apos;ll receive an email within 5 minutes with instructions on how to upload your photos and select your scenarios.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">First Delivery in 48 Hours</h3>
                  <p className="text-warm-gray text-sm">
                    After you upload your photos, you&apos;ll receive your first batch of transformed images within 48 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 text-amber" />
                </div>
                <div>
                  <h3 className="text-cream font-semibold mb-1">Unlimited Revisions</h3>
                  <p className="text-warm-gray text-sm">
                    Not 100% happy? We&apos;ll keep iterating until you are. Your satisfaction is guaranteed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link href="/">
            <Button variant="outline" size="lg">
              Back to Homepage
            </Button>
          </Link>

          {/* Support */}
          <p className="mt-8 text-warm-gray text-sm">
            Questions? Email us at{" "}
            <a href="mailto:chase@rizzbychase.com" className="text-amber hover:underline">
              chase@rizzbychase.com
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-navy-dark flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-2 border-amber border-t-transparent rounded-full" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
