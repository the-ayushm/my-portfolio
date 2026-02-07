import { motion } from "framer-motion";
import { ExternalLink, Github, TrendingUp } from "lucide-react";
import { Section } from "@/components/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Production-grade applications built with modern tech stacks."
    >
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group rounded-2xl border border-border/50 bg-card/30 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-primary/20 hover:bg-card/60 hover:shadow-xl hover:shadow-primary/5 min-w-0"
          >
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Problem statement */}
              <div className="rounded-lg bg-secondary/30 border border-border/30 px-3 sm:px-4 py-3">
                <p className="text-xs sm:text-sm text-muted-foreground break-words">
                  <span className="font-semibold text-foreground/80">Problem: </span>
                  {project.problem}
                </p>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="default">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid gap-2.5 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                {project.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm min-w-0"
                  >
                    <TrendingUp
                      size={14}
                      className="mt-0.5 shrink-0 text-green-500"
                    />
                    <span className="text-muted-foreground">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
