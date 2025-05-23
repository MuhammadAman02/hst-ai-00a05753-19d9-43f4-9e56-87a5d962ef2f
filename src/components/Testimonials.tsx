import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Marie Toft",
      title: "CEO & Co-Founder, Emotionise",
      content: "Leveraging AI to Enhance Emotional Engagement in Content Creation.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      quote: "Nova Leah has been working with HST for the past few years, and our experience has been exceptional. As a startup, we needed a partner who could deliver not just technical excellence but also understand our unique needs and growth pace. HST has more than delivered."
    },
    {
      name: "Anita Finnegan",
      title: "CEO of Nova Leah",
      content: "Building innovative solutions for the future.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      quote: "HST feels like a true extension of our in-house team. Communication is effortless, and their proactive approach has fostered a collaborative and transparent working relationship. Despite being an outsourced team, their commitment to our goals and values has been evident from day one."
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-4">Customer Stories</h2>
          <p className="text-xl text-gray-600">Why Organizations Choose HST</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div 
              className="aspect-video bg-cover bg-center relative"
              style={{ backgroundImage: `url(${current.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="w-16 h-16 rounded-full bg-accent-500 hover:bg-accent-600 flex items-center justify-center">
                  <Play className="h-6 w-6 text-white ml-1" />
                </Button>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl font-bold mb-2">{current.name}</h3>
                <p className="text-lg opacity-90">{current.title}</p>
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="mt-8 text-center">
            <h4 className="text-2xl font-bold text-primary-900 mb-4">{current.content}</h4>
            <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {current.quote}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-accent-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;