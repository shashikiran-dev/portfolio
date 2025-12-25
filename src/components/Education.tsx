import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech – Computer Science and Technology",
      institution: "G. Pulla Reddy Engineering College",
      score: "CGPA: 8.6",
      year: "2022 - 2026",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Junior College",
      score: "87%",
      year: "2020 - 2022",
    },
    {
      degree: "Tenth",
      institution: "Sri Chaitanya School",
      score: "99%",
      year: "2019 - 2020",
    },
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="text-gradient">Education</span>
          </h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={edu.institution}
                className="p-6 glass glass-hover hover:card-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">
                        {edu.score}
                      </span>
                      <span>•</span>
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
