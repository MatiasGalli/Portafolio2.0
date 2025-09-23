import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { GithubLogo, LinkedinLogo } from "./icons";

const footerLinks = [
  {
    title: "Sobre mí",
    href: "#about",
  },
  {
    title: "Experiencia",
    href: "#experience",
  },
  {
    title: "Proyectos",
    href: "#projects",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="max-w-screen-md mx-auto">
        <div className="py-12 flex flex-col justify-start items-center">
          <ul className="mt-6 flex items-center gap-4 flex-wrap">
            {footerLinks.map(({ title, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Separator />
        <div className="py-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
          {/* Copyright */}
          <span className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Matias Galli Alonzo. Todos los derechos reservados.
          </span>

          <div className="flex items-center gap-5 text-muted-foreground">
            <Link
              href="https://github.com/MatiasGalli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/matias-galli-alonzo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;