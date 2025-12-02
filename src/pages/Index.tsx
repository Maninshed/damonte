import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BookingDialog } from "@/components/BookingDialog";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a3a] to-[#0a0a1a] overflow-hidden relative">
      {/* Hero Section - Full Screen - LinkedIn Optimized */}
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
        <div className="container mx-auto px-6 relative z-10 text-center max-w-6xl">
          <div className="animate-slide-up">
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 md:mb-12 leading-tight text-white drop-shadow-2xl">
              Stop wasting time and money on bad AI decisions. <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Fix your strategy now.</span>
            </h1>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex justify-center">
              <BookingDialog>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="text-lg md:text-xl px-8 md:px-12 py-6 md:py-8 h-auto shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                  Book Discovery Call
                  <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </BookingDialog>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
