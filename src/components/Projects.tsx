import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import poultryImg from "@/assets/poultry-project.jpg";
import blockchainImg from "@/assets/blockchain-project.jpg";
import learningImg from "@/assets/learning-project.jpg";
import ecommerceImg from "@/assets/ecommerce-project.jpg";
import mlImg from "@/assets/ml-projects.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Poultry Disease Prediction",
      description:
        "Built a CNN model for poultry disease classification using transfer learning, augmentation, and preprocessing with ResNet50 architecture.",
      image: poultryImg,
      tags: ["Python", "TensorFlow", "Keras", "ResNet50", "OpenCV"],
      github: "https://github.com/shashikiran14/poultry-disease-prediction",
      demo: null,
    },
    {
      title: "Blockchain-based Credential Verification",
      description:
        "Implemented a secure, tamper-proof academic credential verification system using IPFS, digital signatures, and W3C VC standards.",
      image: blockchainImg,
      tags: ["Blockchain", "IPFS", "Flask", "React", "Docker"],
      github: "https://github.com/shashikiran14/blockchain-credential-verification",
      demo: null,
    },
    {
      title: "Personalized Learning Path System",
      description:
        "A hackathon project that recommends personalized learning roadmaps based on user goals and skill assessments.",
      image: learningImg,
      tags: ["AI", "Python", "Recommendation System"],
      github: "https://github.com/shashikiran14/personalized-learning-path",
      demo: null,
    },
    {
      title: "E-Commerce Website",
      description:
        "Built a responsive, user-friendly frontend for online shopping with modern UI/UX principles and clean design.",
      image: ecommerceImg,
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      github: "https://github.com/shashikiran14/ecommerce-website",
      demo: "https://shashikiran14.github.io/ecommerce-website",
    },
    {
      title: "ML Projects Collection",
      description:
        "Includes EDA, sentiment analysis, recommendation systems, object detection, decision trees, and various classifiers.",
      image: mlImg,
      tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
      github: "https://github.com/shashikiran14/ml-projects-collection",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="text-gradient">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="overflow-hidden glass glass-hover hover:card-glow transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
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

export default Projects;
