"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const STORAGE_KEY = "portfolio-theme";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const root = document.documentElement;
    const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme: Theme = storedTheme ?? (prefersDark ? "dark" : "light");

    root.classList.toggle("dark", initialTheme === "dark");
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme: Theme = currentTheme === "dark" ? "light" : "dark";
      const root = document.documentElement;

      root.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem(STORAGE_KEY, nextTheme);

      return nextTheme;
    });
  };

  if (!theme) {
    return null;
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn("relative rounded-full shadow-none", className)}
      onClick={toggleTheme}
      aria-label="Cambiar tema"
    >
      <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Cambiar tema</span>
    </Button>
  );
}
