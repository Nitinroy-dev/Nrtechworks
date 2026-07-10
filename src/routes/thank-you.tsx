import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import thankyouVideo from "../assets/thankyou.mp4.asset.json";

const ASSET_ORIGIN = "https://59429260-2ffa-410a-abf8-f925515c6774.lovableproject.com";
const thankyouVideoUrl = `${ASSET_ORIGIN}${thankyouVideo.url}`;

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — Nr Techworks" },
      { name: "description", content: "Thank you for contacting Nr Techworks. Your enquiry has been received." },
      { property: "og:title", content: "Thank You — Nr Techworks" },
      { property: "og:description", content: "Your enquiry has been received by Nr Techworks." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#0f2a1d] text-[#f5f1e8] flex items-center justify-center px-5 py-10">
      <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-[#f5f1e8] text-[#0f2a1d] shadow-2xl">
        <video
          src={thankyouVideoUrl}
          autoPlay
          muted
          loop
          playsInline
          className="block w-full bg-black"
        />
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