import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  const features = [
    "We solve complex challenges, fast.",
    "Innovation isn't optional, its built-in.",
    "Your goals, powered by our precision."
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                The Right Partner Changes Everything
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At HST Solutions, we don't just deliver technology, we deliver transformation.
              </p>
            </div>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button className="btn-primary">
              Know More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Right Column - Stats Card */}
          <div className="bg-primary-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">By The Numbers</h3>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">60M+</div>
                <div className="text-sm text-gray-300">Secured for Startups</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">1TB+</div>
                <div className="text-sm text-gray-300">Data Processed Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">0.0</div>
                <div className="text-sm text-gray-300">Flawless Ratings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">0M+</div>
                <div className="text-sm text-gray-300">Users Empowered Daily</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">ISO 413</div>
                <div className="text-sm text-gray-300">Certified</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent-400 mb-2">0+</div>
                <div className="text-sm text-gray-300">Years in Business</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button className="btn-primary">
                Get Your Blueprint
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;