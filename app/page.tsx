"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle, Target, Cog, CheckCircle } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] overflow-hidden relative">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image - Cube Banner (Full Width, Not Cropped) */}
        <div 
          className="absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: 'url(/cube.png)',
            backgroundSize: '100% auto',
            backgroundPosition: 'center 40%',
            opacity: 0.6,
          }}
        />

        {/* Subtle Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-[#0a0a1a]/40" />

        {/* Content - Centered */}
        <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
          <div className="animate-slide-up">
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white drop-shadow-2xl">
              Stop wasting time and money on <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">bad AI decisions.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 md:mb-14 max-w-4xl mx-auto leading-relaxed">
              Bring in a part-time AI consultant to guide your strategy, streamline your operations, and implement the right solutions — without hiring full-time.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center">
              <BookingDialog>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  BOOK AI CONSULTANCY INTRO CALL
                  <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </BookingDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Fails Section */}
      <section className="relative py-20 md:py-28 bg-[#0a0a1a]/80">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-amber-400" />
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Why AI Fails for Most <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">SMEs</span>
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Wrong tools",
              "No real strategy",
              "Poor integration",
              "Limited internal expertise",
              "Manual, inefficient processes",
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-[#1a1a3a]/50 border border-[#2a2a4a] rounded-lg p-4"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                <span className="text-gray-300 text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold">
              AI isn&apos;t the issue — the approach is.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              You don&apos;t need more tools.<br />
              You need strategic guidance from someone who understands your business.
            </p>
          </div>
        </div>
      </section>

      {/* Who This Is For Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#0a0a1a] to-[#1a1a3a]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Target className="w-8 h-8 text-purple-400" />
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                This Is For SMEs Who <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Want:</span>
              </h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "A clear and actionable AI roadmap",
              "More efficient operations",
              "Expert guidance without the cost of hiring",
              "Someone embedded in the business who understands the day-to-day",
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-[#1a1a3a]/50 border border-[#2a2a4a] rounded-lg p-5"
              >
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-200 text-lg">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl md:text-2xl text-purple-400 font-semibold">
              If you&apos;re ready for AI to actually make a difference, this is for you.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative py-20 md:py-28 bg-[#0a0a1a]/80">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Cog className="w-8 h-8 text-cyan-400" />
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                How the Part-Time AI <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Consultancy Works</span>
              </h2>
            </div>
          </div>
          
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              I integrate into your business for <span className="text-cyan-400 font-semibold">6–10 hours per month</span> over a <span className="text-cyan-400 font-semibold">3–6 month engagement</span> (extendable), offering strategic support across your entire organisation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { step: "1", text: "Review your departments and workflows" },
              { step: "2", text: "Map key processes" },
              { step: "3", text: "Identify bottlenecks and inefficiencies" },
              { step: "4", text: "Recommend strategic automations" },
              { step: "5", text: "Oversee implementation" },
              { step: "6", text: "Support and train your team" },
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-[#1a1a3a]/50 border border-[#2a2a4a] rounded-lg p-5"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{item.step}</span>
                </div>
                <span className="text-gray-200 text-lg">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-xl md:text-2xl text-white font-semibold">
              No full-time hire. No long contracts.
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Just flexible, expert AI support tailored to your business.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#1a1a3a] to-[#0a0a1a]">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">AI Strategy?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Book your free intro call today and discover how part-time AI consultancy can drive real results for your business.
          </p>
          <BookingDialog>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              BOOK AI CONSULTANCY INTRO CALL
              <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </BookingDialog>
        </div>
      </section>
    </div>
  );
}
