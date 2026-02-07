import { siteConfig } from "@/data/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-6 sm:py-8 px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">{siteConfig.name}</span>
          . Built with React, TypeScript & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
