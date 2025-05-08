
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quantum AI Assistant",
      description: "An AI-powered assistant that uses quantum computing principles to provide unprecedented analysis capabilities.",
      image: "/placeholder.svg",
      tags: ["AI", "Quantum Computing", "SaaS"],
    },
    {
      id: 2,
      title: "EcoTrack Platform",
      description: "A sustainability platform that helps businesses track and reduce their environmental impact.",
      image: "/placeholder.svg",
      tags: ["Sustainability", "Analytics", "B2B"],
    },
    {
      id: 3,
      title: "NeuroBridge",
      description: "A breakthrough neural interface that enables direct brain-to-computer communication for medical applications.",
      image: "/placeholder.svg",
      tags: ["Biotech", "Healthcare", "Research"],
    },
    {
      id: 4,
      title: "Urban Mobility Network",
      description: "A smart city solution optimizing public transportation routes using real-time data and predictive analytics.",
      image: "/placeholder.svg",
      tags: ["Smart City", "IoT", "Transportation"],
    },
    {
      id: 5,
      title: "SecureChain",
      description: "A blockchain-based security framework for critical infrastructure and sensitive data management.",
      image: "/placeholder.svg",
      tags: ["Blockchain", "Security", "Enterprise"],
    },
    {
      id: 6,
      title: "AgroInnovate",
      description: "Precision agriculture tools using drones and AI to maximize crop yield and minimize resource usage.",
      image: "/placeholder.svg",
      tags: ["AgTech", "AI", "Drones"],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore our innovative solutions across various domains.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="border border-border rounded-lg overflow-hidden flex flex-col h-full transition-transform duration-200 hover:-translate-y-1">
                <div className="h-48 bg-muted flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-16 h-16 opacity-30" 
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="w-full justify-start pl-0 hover:pl-2 transition-all group">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">01</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Research</h3>
                <p className="text-muted-foreground">
                  We begin with deep research to fully understand the problem space and opportunity.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">02</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Prototype</h3>
                <p className="text-muted-foreground">
                  Rapid prototyping allows us to test concepts and gather valuable feedback early.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">03</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Build</h3>
                <p className="text-muted-foreground">
                  We develop robust, scalable solutions with cutting-edge technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We'd love to hear about your idea and see how we can help bring it to life.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
