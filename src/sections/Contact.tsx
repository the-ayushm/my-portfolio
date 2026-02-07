import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { Mail, Github, Linkedin, Send, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: siteConfig.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: siteConfig.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: ExternalLink,
    label: "DSA Profile",
    href: siteConfig.dsaProfile,
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // UI-only: would connect to a backend or email service
    const mailtoUrl = `mailto:${siteConfig.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have an opportunity or want to collaborate? Let's connect."
    >
      <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground/80 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground/80 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-foreground/80 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full resize-none rounded-lg border border-border/50 bg-card/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none transition-colors focus:border-primary/50 focus:ring-1 focus:ring-primary/20"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <Button type="submit" size="lg" className="w-full sm:w-auto">
            <Send size={16} />
            Send Message
          </Button>
        </motion.form>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col justify-center"
        >
          <p className="text-muted-foreground mb-6 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something impactful. Feel free to reach
            out through any of these channels.
          </p>
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-border/50 bg-card/30 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-card/60 hover:-translate-y-0.5"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <link.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-medium">{link.label}</p>
                  <p className="text-xs text-muted-foreground truncate max-w-[180px] sm:max-w-[250px]">
                    {link.href.replace("mailto:", "")}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
