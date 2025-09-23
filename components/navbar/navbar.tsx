import { Button } from "@/components/ui/button";
import { GithubLogo, LinkedinLogo } from "../icons";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";

const Navbar = () => {
  return (
    <nav className="fixed z-10 top-6 inset-x-4 h-14 bg-background border border-border max-w-screen-md mx-auto rounded-full">
      <div className="h-full flex items-center justify-between mx-auto px-3">
        
        {/* Logo con cambio según tema */}
        <div className="flex items-center relative w-30 h-20">
          <Image
            src="/logoSimpleNegro.png"
            alt="Matías Galli Logo"
            fill
            className="object-contain dark:hidden"
          />
          <Image
            src="/logoSimpleBlanco.png"
            alt="Matías Galli Logo"
            fill
            className="object-contain hidden dark:block"
          />
        </div>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="outline"
            className="hidden sm:inline-flex rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/matias-galli-alonzo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo />
            </a>
          </Button>
          <Button
            variant="outline"
            className="rounded-full shadow-none"
            size="icon"
            asChild
          >
            <a
              href="https://github.com/MatiasGalli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="h-5 w-5" />
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;