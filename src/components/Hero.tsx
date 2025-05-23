import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(26, 35, 50, 0.8), rgba(26, 35, 50, 0.8)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Custom Software
                <br />
                Development
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300">
                Engineering the Future, Today<sup className="text-accent-400">TM</sup>
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-16 bg-accent-400"></div>
                <span className="text-lg font-medium">Skip the sales pitch</span>
              </div>
              
              <Button className="btn-primary group text-lg px-8 py-4">
                Talk to an Architect
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Right Column - About Section */}
          <div className="text-white space-y-6">
            <h2 className="text-3xl font-bold">About Us</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              We are a trusted Digital engineering and Enterprise modernization partner, 
              combining deep technical expertise and industry experience to help our clients 
              anticipate what's next and answer questions before they are asked.
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary-900">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;