import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Building CNN Models for Image Classification: A Practical Guide",
      excerpt: "Learn how to implement Convolutional Neural Networks for poultry disease prediction using TensorFlow and transfer learning techniques.",
      date: "December 2024",
      tags: ["AI/ML", "TensorFlow", "CNN"],
      readTime: "8 min read",
      link: "#",
    },
    {
      title: "Blockchain for Academic Credentials: Security and Implementation",
      excerpt: "Exploring how blockchain technology can revolutionize academic credential verification with IPFS and digital signatures.",
      date: "November 2024",
      tags: ["Blockchain", "Security", "IPFS"],
      readTime: "6 min read",
      link: "#",
    },
    {
      title: "React Best Practices for Modern Web Development",
      excerpt: "Essential patterns and practices for building scalable React applications with TypeScript and modern tooling.",
      date: "October 2024",
      tags: ["React", "TypeScript", "Web Development"],
      readTime: "5 min read",
      link: "#",
    },
    {
      title: "Machine Learning Model Deployment: From Jupyter to Production",
      excerpt: "A comprehensive guide to deploying ML models using Flask, Docker, and cloud platforms.",
      date: "September 2024",
      tags: ["ML", "Deployment", "Docker"],
      readTime: "10 min read",
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Blog</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <Card
                key={post.title}
                className="p-6 glass glass-hover hover:card-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary transition-colors">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              View All Posts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;