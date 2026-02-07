import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { achievements, education } from "@/data/achievements";
import { Trophy, GitBranch, Award, Medal, GraduationCap } from "lucide-react";

const typeIcons: Record<string, typeof Trophy> = {
  hackathon: Trophy,
  opensource: GitBranch,
  certification: Award,
  competition: Medal,
};

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Hackathons, open source, and certifications."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => {
          const Icon = typeIcons[item.type] || Award;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group rounded-xl border border-border/50 bg-card/30 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Icon size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Education timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16"
      >
        <h3 className="text-2xl font-bold tracking-tight mb-8">
          Education<span className="gradient-text">.</span>
        </h3>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[18px] top-2 bottom-2 w-px bg-border/50" />

          <div className="space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={item.institution}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative flex items-start gap-5 pl-1"
              >
                <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/50 bg-card">
                  <GraduationCap size={16} className="text-primary" />
                </div>
                <div className="pt-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-sm">
                      {item.institution}
                    </h4>
                    <span className="text-xs text-muted-foreground font-mono">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.degree} — {item.score}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
