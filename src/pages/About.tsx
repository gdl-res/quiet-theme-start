
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      {/* Header */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Learn about our mission, vision, and the team behind Lookout Robotics.
            </p>
          </div>
        </div>
      </section>

      {/* Abstract */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Abstract</h2>
            <p className="text-lg mb-6">
              Lookout Robotics aims to impact industrial monitoring and inspection with innovative, end-to-end robotic solutions. Our mission
              is to provide industries with advanced technologies that enhance safety and efficiency while reducing operational costs. We
              focus primarily on industrial enterprises in sectors such as Energy, Agritech, and Infrastructures where more than anywhere
              else prevention is paramount.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Mission</h3>
                <p className="text-muted-foreground">
                  Our mission is to impact industrial monitoring and inspection through end-to-end robotic solutions. We aim to improve safety,
                  efficiency, and sustainability. We are committed to providing solutions that minimize human risk, reduce costs, and increase
                  sustainability.
                </p>
              </div>
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Vision</h3>
                <p className="text-muted-foreground">
                  We envision a future where robots handle dangerous and tedious tasks, freeing humans to focus on higher-value work. By
                  bridging natural and artificial intelligence, we aim to create safer, smarter, and more sustainable environments, driving efficiency
                  and reliability across industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Technology</h2>
            <p className="text-lg mb-6">
              Our technology aims to stand out for its hardware-agnostic approach, allowing us to select the best-fit sensors and robotic
              platforms for each unique use case. We use algorithms for real-time data analysis and robot motion planning, guaranteeing
              the acquisition, evaluation, and storage of data continuously and without the lapses in attention typical of the human operator
              employed in similar and repetitive tasks.
            </p>
            <p className="text-lg">
              We aim to integrate into the pre-existing infrastructure, without requiring costly downtime or modifications to the plant and therefore 
              without hindering production. The solution is an end-to-end software service that covers every aspect of the monitoring and inspection 
              process, from hardware selection to data lifecycle management.
            </p>
          </div>
        </div>
      </section>

      {/* Project Status */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Status</h2>
            <p className="text-lg">
              The project has been funded by RoboIT, the robotics investment fund of CDP, with a pre-seed investment aimed at developing a
              proof of concept and establishing the company by the end of 2025.
            </p>
          </div>
        </div>
      </section>

      {/* Scientific Background & Team */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Scientific Background & Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Gained experience in the field of robotic engineering and automation, in particular in the development of frameworks for
              planning autonomous missions aimed at data collection and the control and autonomous locomotion of floating base robots, for
              example, quadrupeds. In our last EU H2020 project, Natural Intelligence (grant number 101016970), we deployed robots in the
              real world to perform monitoring tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Giovanni Di Lorenzo</h3>
              <p className="text-muted-foreground text-center mb-2">Ph.D. student in Robotics</p>
              <p className="text-sm text-center">Specializing in AI</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Jacopo Cioni</h3>
              <p className="text-muted-foreground text-center mb-2">Research Fellow</p>
              <p className="text-sm text-center">Control of quadruped robots, SLAM, and software engineering</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Michele Pierallini</h3>
              <p className="text-muted-foreground text-center mb-2">Ph.D. in Robotics</p>
              <p className="text-sm text-center">Control of soft robotic systems and iterative learning control</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Franco Angelini</h3>
              <p className="text-muted-foreground text-center mb-2">Assistant Professor</p>
              <p className="text-sm text-center">University of Pisa with a Ph.D. in Robotics</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full overflow-hidden flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Manolo Garabini</h3>
              <p className="text-muted-foreground text-center mb-2">Associate Professor</p>
              <p className="text-sm text-center">University of Pisa with a Ph.D. in Robotics</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Interested in Our Work?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Connect with us to learn more about our robotic solutions and technology.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
