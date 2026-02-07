import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Technologies I work with daily."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
            className="group rounded-xl border border-border/50 bg-card/30 p-4 sm:p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/60 hover:shadow-lg hover:shadow-primary/5 min-w-0"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <category.icon size={18} />
              </div>
              <h3 className="font-semibold text-sm tracking-wide">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center rounded-md bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
