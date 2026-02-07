import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Code2, Zap, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    label: "400+ DSA Problems",
    description: "Strong algorithmic thinking and problem-solving foundation",
  },
  {
    icon: Zap,
    label: "Full Stack",
    description: "End-to-end ownership from database design to pixel-perfect UI",
  },
  {
    icon: Globe,
    label: "Production-Ready",
    description: "Building scalable systems that serve real users at scale",
  },
];

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Engineer who ships."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-muted-foreground leading-relaxed text-base">
            I'm a Full Stack Developer with a focus on building production-grade
            web applications using modern JavaScript frameworks. I care about
            clean architecture, performance optimization, and delivering
            real-world impact — not just writing code.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            From designing secure authentication systems with Role-Based Access Control
            to architecting real-time communication platforms handling thousands of
            concurrent users, I bring a systems-thinking approach to every project.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base">
            Currently pursuing B.Tech in Computer Science at KIET Group of
            Institutions, I'm actively building, contributing to open source,
            and competing in hackathons to sharpen my craft.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="group flex items-start gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{item.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
