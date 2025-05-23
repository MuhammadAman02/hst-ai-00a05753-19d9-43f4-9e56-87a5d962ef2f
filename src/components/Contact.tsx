import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hearAbout: "",
    startDate: "",
    subject: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const stats = [
    { number: "1+", label: "Years in Business" },
    { number: "0.0", label: "Flawless Ratings" },
    { number: "45+", label: "Successful Projects" }
  ];

  return (
    <section className="py-20 bg-primary-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h2>
              <p className="text-xl text-gray-300 mb-2">Tell us about your custom software project</p>
              <p className="text-accent-400 font-semibold text-lg">Let our team, be your team</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Unsure of how to get started? Talk to us. No matter where you are in the process, 
                we can help you. Whether you need us to design and build a prototype, take your 
                project from concept to maturity, or build off the work of another team, we can 
                make your idea a reality. We also step in when it makes more sense to lean on our 
                expertise than to have an in-house team spread too thin.
              </p>
              <p className="text-gray-300">
                Generally, we are able to respond to inquiries within 8 business hours.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-600">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-accent-400 mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-primary-900 mb-6">
              Please fill in the form below and we will be in touch.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 border-0"
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 border-0"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="phone"
                  placeholder="Phone *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 border-0"
                />
                <Input
                  name="hearAbout"
                  placeholder="How did you hear about us?"
                  value={formData.hearAbout}
                  onChange={handleChange}
                  className="bg-gray-100 border-0"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="startDate"
                  placeholder="When do you want to start?"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="bg-gray-100 border-0"
                />
                <Input
                  name="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-100 border-0"
                />
              </div>

              <Textarea
                name="description"
                placeholder="Project Description (Optional)"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="bg-gray-100 border-0"
              />

              <Button type="submit" className="btn-primary w-full">
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;