import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "SQL", level: 85 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
      ],
    },
    {
      title: "AI/ML",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 80 },
        { name: "Scikit-learn", level: 85 },
        { name: "TensorFlow", level: 75 },
        { name: "Keras", level: 75 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git", level: 90 },
        { name: "Android Studio", level: 70 },
        { name: "Anaconda", level: 80 },
      ],
    },
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", level: 90 },
        { name: "Linux (Ubuntu)", level: 75 },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Team collaboration", level: 85 },
        { name: "Effective communication", level: 90 },
        { name: "Adaptability", level: 85 },
        { name: "Event coordination", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className="p-6 glass glass-hover hover:card-glow-accent transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={typeof skill === 'string' ? skill : skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <Badge variant="secondary" className="text-sm">
                          {typeof skill === 'string' ? skill : skill.name}
                        </Badge>
                        {typeof skill === 'object' && (
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        )}
                      </div>
                      {typeof skill === 'object' && (
                        <Progress value={skill.level} className="h-2" />
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
