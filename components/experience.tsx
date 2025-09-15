import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievement?: string;
  technologies: string[];
}

const ExperienceItem = ({
  title,
  company,
  period,
  description,
  achievement,
  technologies,
}: ExperienceItemProps) => {
  return (
    <div className="relative pl-8 not-last:pb-12">
      {/* Timeline line */}
      <div className="absolute left-0 top-2.5 h-full w-[2px] bg-muted group-first:h-[calc(100%-24px)] group-first:top-6">
        <div className="absolute h-3 w-3 -left-[5px] top-0 rounded-full border-2 border-primary bg-background" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex-shrink-0 size-9 bg-accent rounded-full flex items-center justify-center">
            <Building2 className="size-5 text-muted-foreground" />
          </div>
          <span className="text-lg font-semibold">{company}</span>
        </div>
        <div>
          <h3 className="text-xl font-medium">{title}</h3>
          <div className="flex items-center gap-2 mt-1 text-sm">
            <Calendar className="size-4" />
            <span>{period}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{description}</p>
        {achievement && (
            <p className="mt-2 italic text-sm text-primary">• {achievement}</p>
          )}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      title: "Desarrollador de Fullstack",
      company: "Facultad de Ciencias del Mar · UCN",
      period: "Ago 2025 – Actualidad",
      description:
        "Rol fullstack en el desarrollo de una plataforma de reservas de laboratorios y control de materiales. Apoyo en frontend con React/Next.js y desarrollo de APIs en Node.js + TypeScript.",
      technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
      achievement:
        "Plataforma de gestión para toda la facultad, con impacto en múltiples laboratorios.",
    },
    {
      title: "Fundador & Consultor Tecnológico",
      company: "Cutback · Agencia Digital",
      period: "Jun 2025 – Actualidad",
      description:
        "Encargado del área tecnológica en agencia de marketing digital para pymes. Desarrollo fullstack de la web en Next.js + TypeScript (deploy en Vercel/Cloudflare) y consultoría en seguridad y performance.",
      technologies: ["Next.js", "TypeScript", "Vercel", "Cloudflare"],
      achievement:
        "Creación de agencia con 3 clientes activos, integrando soluciones tecnológicas y de negocio.",
    },
    {
      title: "Desarrollador de Software",
      company: "Solem S.A.",
      period: "Ago 2024 – Dic 2024",
      description:
        "Desarrollo de backend escalable para sistema de validación biométrica con redes neuronales siamesas y soporte frontend en Next.js. Integración en tiempo real con precisión >98%.",
      technologies: ["Node.js", "Flask", "Next.js", "Python", "Docker"],
      achievement:
        "Validación en tiempo real con precisión superior al 98%.",
    },
    {
      title: "Desarrollador Web SIG",
      company: "Municipalidad de La Serena",
      period: "Ene 2024 – Mar 2024",
      description:
        "Automatización de procesos y desarrollo de APIs para la gestión de mapas interactivos en la web municipal. Reducción de tiempos de gestión en un 30%.",
      technologies: ["JavaScript", "Leaflet", "Docker"],
      achievement:
        "Automatización que redujo tiempos en un 30% con mapas interactivos escalables.",
    },
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Experiencia
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Camino Profesional
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            A timeline of my professional growth and key achievements
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
