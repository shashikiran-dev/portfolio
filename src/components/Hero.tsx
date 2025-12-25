import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="text-gradient animate-pulse">
              Kuruva Shashi Kiran
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Computer Science & Technology Student | AI/ML Enthusiast | Web
            Developer | Blockchain Explorer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
            I build intelligent systems, modern web apps, and secure digital
            solutions.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              size="lg"
              className="btn-gradient gap-2 shadow-lg hover:shadow-xl transition-all duration-300 text-white font-semibold"
              asChild
            >
              <a
                href="/resume.pdf"
                download="Shashi_Kiran_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a
                href="https://github.com/shashikiran14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/sashi-kiran-02bb8a255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="mt-16">
            <a href="#about">
              <ArrowRight className="h-8 w-8 mx-auto text-primary animate-bounce rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
