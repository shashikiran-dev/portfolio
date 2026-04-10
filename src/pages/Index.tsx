import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import GitHubStats from "@/components/GitHubStats";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Internships from "@/components/Internships";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <GitHubStats />
        <Projects />
        <Blog />
        <Internships />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
