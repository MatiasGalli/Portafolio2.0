import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            {/* Logo arriba */}
            <div className="mb-6 flex items-center gap-3">
              <Badge variant="secondary">Sobre mí</Badge>
            </div>

            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Desarrollador Fullstack enfocado en crear experiencias web modernas
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              Soy <strong>Matías Galli</strong>, Ingeniero en Tecnologías de la
              Información y Desarrollador Fullstack. Trabajo con{" "}
              <strong>React, Next.js, Node.js y TypeScript</strong>, integrando
              frontend dinámico con backends robustos. He participado en
              proyectos de <em>validación biométrica en tiempo real</em>,
              <em> mapas interactivos para municipalidades</em> y{" "}
              <em>plataformas de reservas académicas</em>. Me motiva crear
              soluciones digitales que combinen{" "}
              <strong>usabilidad, rendimiento y despliegues en la nube</strong>.
            </p>
            <div className="flex flex-wrap gap-4 justify-start">
              <Button className="rounded-full">
                <GithubLogo />
                Ver Github
              </Button>
              <Button variant="outline" className="rounded-full">
                <Download />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/Logo.png" alt="Foto de perfil" className="object-cover" fill />
    </div>
  </div>
);

export default About;