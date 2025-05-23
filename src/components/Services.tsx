import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Smartphone, Cloud, TestTube, Globe, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Rapid Action Engineering",
      color: "bg-white"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Application Development",
      description: "E-commerce, Enterprise, Marketplace, Media",
      color: "bg-white"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Apps and APIs",
      description: "Cloud-Native Development, Application Modernization",
      color: "bg-white"
    },
    {
      icon: <TestTube className="h-8 w-8" />,
      title: "Software Testing & QA",
      description: "Quality engineering, Complete test",
      color: "bg-white"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile Apps Development",
      description: "iOS, Android, React, AI Driven experiences",
      color: "bg-white"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI-UX Services",
      description: "People First, Then Technology",
      color: "bg-white"
    }
  ];

  const leftServices = [
    {
      title: "Digital Engineering",
      subtitle: "Product & Platform Engineering",
      color: "text-accent-400"
    },
    {
      title: "Data Engineering & Data Science",
      subtitle: "Product & Platform Engineering",
      color: "text-white"
    },
    {
      title: "AI/ML & Gen AI",
      subtitle: "AI consulting services",
      color: "text-white"
    },
    {
      title: "Dedicated Project Management Team",
      subtitle: "Transforming Projects",
      color: "text-white"
    },
    {
      title: "Dedicated Development team",
      subtitle: "Smart teams, Elite engineers",
      color: "text-white"
    }
  ];

  return (
    <section id="services" className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300">People First, Then Technology</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column - Service Categories */}
          <div className="lg:col-span-1 space-y-6">
            {leftServices.map((service, index) => (
              <div key={index} className="space-y-2">
                <h3 className={`text-lg font-semibold ${service.color}`}>
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm">{service.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Right Column - Service Cards */}
          <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="card-hover bg-white border-0 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="text-primary-900 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-3 flex-grow">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {service.description}
                  </p>
                  <ArrowRight className="h-5 w-5 text-accent-500 mt-auto" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Skip generic consultations.</h3>
            <p className="text-gray-300">
              Get a personalised technical roadmap from our senior architects in a focused blueprint session.
            </p>
          </div>
          <Button className="btn-primary text-lg px-8 py-4">
            Schedule Blueprint Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;