import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      number: "60M+",
      label: "Secured for Startups",
      icon: "💰",
      color: "text-accent-400"
    },
    {
      number: "1TB+",
      label: "Data Processed Daily",
      icon: "📊",
      color: "text-accent-400"
    },
    {
      number: "0.0",
      label: "Flawless Ratings",
      icon: "⭐",
      color: "text-accent-400"
    },
    {
      number: "0M+",
      label: "Users Empowered Daily",
      icon: "👥",
      color: "text-accent-400"
    },
    {
      number: "ISO 413",
      label: "Certified",
      icon: "🏆",
      color: "text-accent-400"
    },
    {
      number: "0+",
      label: "Years in Business",
      icon: "⏰",
      color: "text-accent-400"
    },
    {
      number: "0",
      label: "Development Centers",
      icon: "🏢",
      color: "text-accent-400"
    },
    {
      number: "3+",
      label: "Successful Projects",
      icon: "✅",
      color: "text-accent-400"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">By The Numbers</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`}>
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm lg:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">
            Get Your Blueprint
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Stats;