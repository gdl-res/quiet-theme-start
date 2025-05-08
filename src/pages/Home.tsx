
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/653008c4-ca75-4e67-b800-2ee020e5d6fb.png" 
                alt="Lookout Robotics" 
                className="h-20" 
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Innovative Robotic Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              End-to-end robotic solutions for industrial monitoring and inspection, enhancing safety and efficiency while reducing operational costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/projects">Our Solutions</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                Our mission is to impact industrial monitoring and inspection through end-to-end robotic solutions. 
                We aim to improve safety, efficiency, and sustainability. We are committed to providing solutions 
                that minimize human risk, reduce costs, and increase sustainability.
              </p>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                We envision a future where robots handle dangerous and tedious tasks, freeing humans to focus on 
                higher-value work. By bridging natural and artificial intelligence, we aim to create safer, smarter, 
                and more sustainable environments, driving efficiency and reliability across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Technology</h2>
            <p className="text-lg text-muted-foreground">
              Hardware-agnostic approach, real-time data analysis, and seamless integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Hardware-Agnostic</h3>
              <p className="text-muted-foreground">
                We select the best-fit sensors and robotic platforms for each unique use case, providing tailored solutions.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Real-time Analysis</h3>
              <p className="text-muted-foreground">
                Our algorithms provide continuous data analysis and robot motion planning without lapses in attention.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Seamless Integration</h3>
              <p className="text-muted-foreground">
                We integrate into pre-existing infrastructure without requiring costly downtime or modifications to the plant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Status Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Project Status</h2>
            <p className="text-lg text-muted-foreground mb-8 text-center">
              The project has been funded by RoboIT, the robotics investment fund of CDP, with a pre-seed investment 
              aimed at developing a proof of concept and establishing the company by the end of 2025.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your industrial processes?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join us in creating safer, more efficient industrial environments through robotics.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="inline-flex items-center">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
