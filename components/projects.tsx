import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  private?: boolean;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
  private: isPrivate,
  
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-accent transition-all hover:border-primary/50">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {isPrivate && (
          <p className="text-xs text-muted-foreground italic mb-4">🔒 Proyecto privado en GitHub</p>
        )}

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Sitio web
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild
            >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubLogo className="mr-1 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Plataforma de Reservas y Control de Materiales",
    description:
      "Sistema fullstack para la Facultad de Ciencias del Mar (UCN), permitiendo reservas de laboratorios y gestión de insumos. Incluye frontend en React/Next.js y backend con Node.js + TypeScript.",
    image: "/Fcm.png",
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    liveUrl: "", // privado
    githubUrl: "", // privado
    private: true,
  },
  {
    title: "Sistema de Validación Biométrica",
    description:
      "Backend escalable para validación de cédulas chilenas mediante OCR y redes neuronales siamesas, logrando validación en tiempo real con precisión superior al 98%.",
    image: "/Biometria.png",
    technologies: ["Python", "Flask", "Torch", "OpenCV", "PostgreSQL"],
    liveUrl: "", // privado
    githubUrl: "", // privado
    private: true,
  },
  {
    title: "Cutback · Agencia Digital",
    description:
      "Desarrollo fullstack de la web corporativa de Cutback en Next.js + TypeScript con despliegue en Vercel y Cloudflare. Consultoría tecnológica para clientes pymes en performance y seguridad.",
    image: "/Cutback.png",
    technologies: ["Next.js", "TypeScript", "Vercel", "Cloudflare"],
    liveUrl: "https://www.cutback.cl/",
    githubUrl: "",
    private: true,
  },
  {
    title: "Mapas Interactivos SIG",
    description:
      "Desarrollo de mapas interactivos para la Municipalidad de La Serena con Leaflet y automatización de registros en la web municipal. Reducción de tiempos de gestión en un 30%.",
    image: "/Sig.png",
    technologies: ["JavaScript", "Leaflet", "Docker"],
    liveUrl: "https://mapas.laserena.cl/", // si tienes link
    githubUrl: "", // privado
    private: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Proyectos
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Mi Trabajo Destacado
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Una selección de los proyectos más importantes en los que he trabajado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;