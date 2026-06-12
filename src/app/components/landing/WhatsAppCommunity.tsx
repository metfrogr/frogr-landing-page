import { MessageCircle } from "lucide-react";

export function WhatsAppCommunity() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-neutral-100 shadow-xl shadow-black/5 p-8 md:p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#25D366]/10 flex items-center justify-center mx-auto mb-5">
            <MessageCircle className="w-8 h-8 text-[#25D366]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b0b0b] mb-3">
            Join Our WhatsApp Community
          </h2>
          <p className="text-neutral-600 leading-relaxed mb-7 max-w-lg mx-auto">
            Connect with like-minded individuals, stay updated with launch news and early access announcements, and be part of our growing community. Get instant notifications and engage in meaningful conversations.
          </p>
          <a
            href="https://chat.whatsapp.com/INe1JdYjai5EJ8UkH7CLIW"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20b858] text-white font-semibold text-sm transition-all hover:scale-105 shadow-lg shadow-[#25D366]/30"
          >
            <MessageCircle className="w-5 h-5" />
            Join Community
          </a>
        </div>
      </div>
    </section>
  );
}
