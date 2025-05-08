
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Future of AI in Everyday Technology",
      excerpt: "Exploring how artificial intelligence is becoming increasingly integrated into our daily lives and what that means for society.",
      date: "May 7, 2025",
      author: "Alex Johnson",
      category: "Technology",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Sustainable Innovation: Building for Tomorrow",
      excerpt: "How companies can embrace sustainable practices while continuing to innovate and grow in competitive markets.",
      date: "May 2, 2025",
      author: "Sarah Kim",
      category: "Sustainability",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Quantum Computing: A New Era Begins",
      excerpt: "An overview of recent breakthroughs in quantum computing and the potential implications for various industries.",
      date: "April 28, 2025",
      author: "David Chen",
      category: "Technology",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "The Rise of Remote Work Culture",
      excerpt: "Examining how remote work is reshaping corporate culture and what it means for the future of work.",
      date: "April 20, 2025",
      author: "Michelle Wang",
      category: "Business",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Ethical Considerations in Modern Tech",
      excerpt: "A deep dive into the ethical questions facing technology companies and developers in today's rapidly evolving landscape.",
      date: "April 15, 2025",
      author: "James Peterson",
      category: "Ethics",
      readTime: "12 min read",
    },
    {
      id: 6,
      title: "Blockchain Beyond Cryptocurrency",
      excerpt: "Exploring the many applications of blockchain technology beyond its origins in cryptocurrency.",
      date: "April 8, 2025",
      author: "Alex Johnson",
      category: "Technology",
      readTime: "6 min read",
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-20 md:py-28">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-muted-foreground">
              Insights, thoughts and perspectives from our team.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="bg-muted/50 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit" variant="outline">{posts[0].category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{posts[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <span>{posts[0].date}</span>
                    <span className="mx-2">•</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                  <Button asChild variant="default" className="w-fit group">
                    <a href="#">
                      Read Full Article <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                </div>
                <div className="bg-primary/5 flex items-center justify-center p-12">
                  <div className="text-7xl text-primary/20 font-bold">FEATURED</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="border border-border rounded-lg overflow-hidden flex flex-col h-full">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-4">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="w-full justify-start pl-0 hover:pl-2 transition-all group">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter to receive the latest updates, articles, and insights from our team.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button type="submit">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
