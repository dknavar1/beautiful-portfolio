import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Anime Bites",
        description: "An interactive multi-page website featuring anime-inspired recipes, built with HTML, CSS, JavaScript, and JSON to showcase dynamic content and engaging user experiences.",
        image: "projects/project1.png",
        demoUrl: "https://dknavar1.github.io/SeniorProject/",
        tags: ["HTML", "Tailwind CSS", "JavaScript", "JSON"],
    },

    {
        id: 2,
        title: "Discography Website",
        description: "A single-page Taylor Swift fan site showcasing her discography with interactive features like a carousel, accordion, and light/dark mode.",
        image: "projects/project2.png",
        demoUrl: "https://dknavar1.github.io/FinalProject/",
        tags: ["HTML/CSS", "JavaScript", "jQuery"],
    },

    {
        id: 3,
        title: "Product Page",
        description: "A product page for Glow Recipe, featuring a styled shopping cart layout and hover effects, built with HTML, CSS, and JavaScript.",
        image: "projects/project3.png",
        demoUrl: "https://dknavar1.github.io/FinalProject/",
        tags: ["HTML", "CSS", "JavaScript"],
    }

];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Created for academic projects, each piece reflects the assignment criteria while showcasing practical application of design and development principles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/dknavar1"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};