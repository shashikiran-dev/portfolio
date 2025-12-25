import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            About <span className="text-gradient">Me</span>
          </h2>

          <Card className="p-8 glass glass-hover animate-slide-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I am <span className="text-gradient font-semibold">Kuruva Shashi Kiran</span>, 
              a Computer Science and Technology student at{" "}
              <span className="text-foreground font-semibold">
                G. Pulla Reddy Engineering College
              </span>{" "}
              (CGPA: 8.6). I am passionate about AI/ML, web development,
              cybersecurity, and blockchain-based systems. I love building
              real-world projects that combine innovation, problem-solving, and
              clean engineering practices.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              I have completed multiple internships in AI/ML, Cybersecurity, and
              Frontend Development, gaining hands-on experience in developing ML
              models, secure systems, and full-stack applications. I enjoy
              exploring new technologies and contributing to impactful solutions.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
