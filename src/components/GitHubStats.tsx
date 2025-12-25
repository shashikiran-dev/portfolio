import { Card } from "@/components/ui/card";
import { Github, Star, GitFork, Users, Code } from "lucide-react";
import { useEffect, useState } from "react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  total_stars: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/shashikiran14');
        const userData = await userResponse.json();

        // Fetch repositories to calculate total stars
        const reposResponse = await fetch('https://api.github.com/users/shashikiran14/repos?per_page=100');
        const reposData = await reposResponse.json();
        const totalStars = reposData.reduce((acc: number, repo: any) => acc + repo.stargazers_count, 0);

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          total_stars: totalStars,
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <section id="github-stats" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              GitHub <span className="text-gradient">Stats</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <Card key={i} className="p-6 glass animate-pulse">
                  <div className="h-8 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!stats) return null;

  const statItems = [
    {
      icon: Code,
      label: "Repositories",
      value: stats.public_repos,
    },
    {
      icon: Users,
      label: "Followers",
      value: stats.followers,
    },
    {
      icon: Star,
      label: "Total Stars",
      value: stats.total_stars,
    },
    {
      icon: Github,
      label: "Following",
      value: stats.following,
    },
  ];

  return (
    <section id="github-stats" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            GitHub <span className="text-gradient">Stats</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statItems.map((item, index) => (
              <Card
                key={item.label}
                className="p-6 glass glass-hover hover:card-glow-accent transition-all duration-300 animate-fade-in animate-float"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.value}</h3>
                <p className="text-muted-foreground">{item.label}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://github.com/shashikiran14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Github className="h-5 w-5" />
              View Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;