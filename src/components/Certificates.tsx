import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Infosys Springboard",
      topics: ["Java", "DSA", "Cloud Computing", "Next Gen Tech", "AI"],
    },
    {
      title: "Cisco Networking Academy",
      topics: ["Cybersecurity Essentials", "Packet Tracer"],
    },
    {
      title: "CodTech ML Internship",
      topics: ["Machine Learning", "Deep Learning"],
    },
    {
      title: "Bit Labs",
      topics: ["HTML", "CSS"],
    },
    {
      title: "Web Blinders",
      topics: ["AI/ML"],
    },
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Certificates & <span className="text-gradient">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <Card
                key={cert.title}
                className="p-6 glass glass-hover hover:card-glow-accent transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Award className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold flex-1">{cert.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.topics.map((topic) => (
                    <Badge key={topic} variant="secondary" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <Card className="p-6 glass glass-hover">
              <h3 className="text-2xl font-semibold mb-4 text-center">
                Extracurricular Activities
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Coordinator for National Youth Day event</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Organizing team member of Jignasa national event</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Volunteered at college events (2 appreciation certificates)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>Active involvement in community service activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  <span>
                    Designing banners, posters, and videos for college events
                  </span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
