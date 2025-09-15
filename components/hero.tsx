import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleArrowDown, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 pt-6 overflow-hidden">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 h-full skew-y-12"
        )}
      />
      <div className="relative z-[1] text-center max-w-screen-md">
        <Badge className="rounded-full border-none">
          <Zap className="fill-current" />
          Desarrollador Fullstack
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Construyendo aplicaciones web completas, modernas y escalables
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          ¡Hola! Soy Matías Galli, Desarrollador Fullstack con experiencia en React, 
          Next.js, Node.js y TypeScript. He trabajado en proyectos que van desde mapas 
          interactivos para municipalidades hasta plataformas de reservas académicas. Combino
          frontend atractivo con backend robusto, siempre cuidando performance, 
          usabilidad y despliegue en la nube. Me motiva transformar ideas en productos 
          digitales que realmente impacten.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
             Ve lo que he hecho<CircleArrowDown className="ml-2 !h-5.5 !w-5.5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
