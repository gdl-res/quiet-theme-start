
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
              Learn about our mission, our values, and the team behind Novus.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Story</h2>
            <p className="text-lg mb-6">
              Novus began with a simple vision: to create technology that makes a difference. Founded in 2021, our startup journey started when a group of innovators came together with a shared passion for solving complex problems.
            </p>
            <p className="text-lg mb-6">
              We saw opportunities where others saw obstacles, and set out to build solutions that would redefine what's possible. Through countless late nights, iterations, and pivots, we've grown from a small team with big ideas into a focused organization delivering impactful technology.
            </p>
            <p className="text-lg">
              Today, Novus stands at the intersection of innovation and practicality. We're dedicated to creating products that aren't just technically impressive but make a meaningful difference in people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Innovation First</h3>
              <p className="text-muted-foreground">
                We believe in challenging the status quo and pushing boundaries to discover new possibilities.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">User-Centered</h3>
              <p className="text-muted-foreground">
                We design for people first, ensuring our technology serves real human needs.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We operate with honesty, transparency, and ethical responsibility in all we do.
              </p>
            </div>

            <div className="p-6 border border-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Continuous Learning</h3>
              <p className="text-muted-foreground">
                We embrace a growth mindset, constantly evolving and improving our knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The talented people behind our success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full overflow-hidden">
                <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold">Alex Johnson</h3>
              <p className="text-muted-foreground">CEO & Founder</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full overflow-hidden">
                <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold">Sarah Kim</h3>
              <p className="text-muted-foreground">CTO</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-full overflow-hidden">
                <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-muted-foreground">Head of Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're always looking for talented individuals to join our team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#">Careers</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
