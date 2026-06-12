import { X } from "lucide-react";
import { useEffect } from "react";

interface Props {
  type: "privacy" | "terms" | null;
  onClose: () => void;
}

const content = {
  privacy: {
    title: "Privacy Policy",
    body: `Frogr (operated by Metfrogr Technologies Pvt. Ltd.) collects your mobile number and basic profile information to facilitate job matching and platform communication. We use this data only to connect job posters with workers in your area.

We do not sell your personal data to third parties. Your mobile number may be used to send you job notifications, waitlist updates, and platform alerts.

We use industry-standard security practices to protect your information. You may request deletion of your data at any time by contacting support@frogr.in.

By using Frogr, you consent to the collection and use of your information as described in this policy. This policy may be updated from time to time — we'll notify you of significant changes.

For questions, contact support@frogr.in.`,
  },
  terms: {
    title: "Terms of Service",
    body: `By using Frogr, you agree to the following terms:

1. **Eligibility** — You must be 18+ and reside in India to use Frogr.

2. **Job Posting** — Job posters are responsible for the accuracy of job descriptions, budgets, and locations. Misleading posts may result in account suspension.

3. **Accepting Jobs** — Workers accept jobs without bidding. Once confirmed by the poster, both parties are expected to fulfil the agreement.

4. **Payments** — All payments are made directly between job posters and workers via Cash or UPI. Frogr does not process, hold, or guarantee payments.

5. **Conduct** — All users must treat each other with respect. Harassment, fraud, or abuse of the platform will result in permanent account removal.

6. **Disputes** — Disputes are reviewed by our team. Decisions are final and binding.

7. **Limitation of Liability** — Frogr is a platform connecting parties. We are not liable for the quality of work, payment disputes, or personal safety incidents arising from job interactions.

8. **Changes** — These terms may be updated. Continued use of Frogr constitutes acceptance of updated terms.

Contact support@frogr.in for any questions.`,
  },
};

export function PrivacyTermsModal({ type, onClose }: Props) {
  useEffect(() => {
    if (type) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [type]);

  if (!type) return null;

  const { title, body } = content[type];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <h2 className="font-bold text-[#0b0b0b] text-lg">{title}</h2>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-neutral-100 transition-colors">
            <X className="w-5 h-5 text-neutral-500" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-5 flex-1">
          <div className="text-sm text-neutral-600 leading-relaxed whitespace-pre-line">{body}</div>
        </div>
      </div>
    </div>
  );
}
