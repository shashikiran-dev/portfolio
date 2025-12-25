import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Internships = () => {
  const internships = [
    {
      role: "AI/ML Intern",
      company: "Smart Bridge",
      duration: "2024",
      description:
        "Built Deep Learning model using ResNet50 for image classification. Worked on transfer learning and model optimization techniques.",
      skills: ["Deep Learning", "ResNet50", "TensorFlow", "Python"],
    },
    {
      role: "Cybersecurity Intern",
      company: "Edu Skills (Cohort 11)",
      duration: "2024",
      description:
        "Worked on cybersecurity essentials, packet tracer simulations, and secure networking concepts. Implemented security protocols and threat analysis.",
      skills: ["Network Security", "Packet Tracer", "Security Protocols"],
    },
    {
      role: "Frontend Development Intern",
      company: "Internship Studio",
      duration: "2023",
      description:
        "Developed responsive web pages and a mini e-commerce site using HTML, CSS, and JavaScript. Enhanced UI/UX and implemented modern design patterns.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    },
  ];

  return (
    <section id="internships" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Work <span className="text-gradient">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

            <div className="space-y-12">
              {internships.map((internship, index) => (
                <div
                  key={internship.company}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  </div>

                  <Card
                    className={`flex-1 p-6 glass glass-hover ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    } md:w-5/12 hover:card-glow transition-all duration-300`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">
                          {internship.role}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {internship.company}
                        </p>
                        <p className="text-sm text-muted-foreground mb-3">
                          {internship.duration}
                        </p>
                        <p className="text-muted-foreground mb-4">
                          {internship.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
