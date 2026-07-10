import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const thankyouVideoUrl = "/assets/thankyou.mp4";
const thankyouVideoWebmUrl = "/assets/thankyou.webm";
const thankyouPosterUrl = "/assets/thankyou-poster.jpg";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Nr Techworks" },
      { name: "description", content: "Thank you for contacting Nr Techworks. Your enquiry has been received." },
      { property: "og:title", content: "Thank You — Nr Techworks" },
      { property: "og:description", content: "Your enquiry has been received by Nr Techworks." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/thank-you" },
      { name: "robots", content: "noindex" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0f2a1d] text-[#f5f1e8] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-[#f5f1e8] text-[#0f2a1d] shadow-2xl">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={thankyouPosterUrl}
          className="block w-full bg-black"
        >
          <source src={thankyouVideoWebmUrl} type="video/webm" />
          <source src={thankyouVideoUrl} type="video/mp4" />
        </video>
        <div className="p-6 text-center">
          <h1 className="font-serif text-3xl">Thank you!</h1>
          <p className="mt-2 text-sm text-[#0f2a1d]/70">Your enquiry has been received. We'll get back to you within 48 hours.</p>
          <a
            href="/"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0f2a1d] px-7 py-3 text-sm text-[#f5f1e8] transition hover:bg-[#1a3a2a]"
          >
            Back to Homepage <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </main>
  );
}