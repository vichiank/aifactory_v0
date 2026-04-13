import * as React from "react";
import { motion } from "motion/react";
import { Shield, Lock, Eye, Cpu, Database, Globe, Scale, Clock, Mail } from "lucide-react";

export function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Introduction",
      icon: Shield,
      content: "This website serves as a personal portfolio demonstrating AI-powered applications, automation workflows, and strategic technology solutions. Protecting your privacy is a fundamental priority. This policy outlines how I handle information when you interact with my demonstrations and services."
    },
    {
      title: "2. Information We Collect",
      icon: Eye,
      content: "While using our demos, the system may collect: \n• User input text submitted directly into AI tool demonstrations\n• Basic usage analytics (e.g., page views, interaction duration)\n• Technical information such as browser type, device information, and IP address for security purposes.\n\nI do not intentionally collect sensitive personal information (such as government IDs or financial data)."
    },
    {
      title: "3. How We Use Information",
      icon: Cpu,
      content: "Collected information is used strictly to:\n• Process and fulfill AI-driven requests within the demos\n• Improve system performance and user experience\n• Analyze application usage patterns for portfolio optimization\n• Demonstrate real-world AI automation capabilities to visitors."
    },
    {
      title: "4. AI Processing",
      icon: BrainCircuit,
      content: "Some inputs provided in our demos are processed by external AI services (such as Google Gemini, OpenAI, or other cloud AI platforms) to generate intelligent responses. These services process requests only to generate the requested output and are not used by me to identify individual users."
    },
    {
      title: "5. Data Storage",
      icon: Database,
      content: "Most interactions with my AI demos are processed temporarily (in-memory) and are not permanently stored. However, some metadata or specific demo results may be stored in my secure database to facilitate the demonstration of persistent AI workflows."
    },
    {
      title: "6. Third-Party Services",
      icon: Globe,
      content: "My application relies on trusted third-party services, including:\n• Cloud hosting platforms (Google Cloud / Firebase)\n• AI processing APIs (Google Generative AI)\n• Basic analytics tools to monitor site health."
    },
    {
      title: "7. Data Security",
      icon: Lock,
      content: "I implement reasonable technical and organizational measures to protect any data processed through this site. This includes encryption in transit and secure database configurations to prevent unauthorized access."
    },
    {
      title: "8. User Rights",
      icon: Scale,
      content: "As this is a demonstration portfolio, I aim for transparency. You may request information about any data you believe has been submitted, or request the removal of such data, by contacting me directly."
    },
    {
      title: "9. Changes to This Policy",
      icon: Clock,
      content: "This Privacy Policy may be updated periodically to reflect changes in my technology demos or legal requirements. I encourage you to review this page occasionally."
    },
    {
      title: "10. Contact Information",
      icon: Mail,
      content: "For any privacy-related inquiries or data requests, please contact me at:\n\nk_vichian@hotmail.com"
    }
  ];

  return (
    <div className="py-12 px-8 lg:px-16 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-5xl lg:text-6xl font-display font-bold mb-6 neon-text-cyan">
          Privacy Policy
        </h1>
        <div className="w-24 h-1 bg-accent-cyan mx-auto shadow-[0_0_15px_rgba(0,245,255,0.8)] rounded-full" />
        <p className="mt-8 text-white/60 text-lg max-w-2xl mx-auto">
          Transparency in AI-powered automation and data processing.
        </p>
      </motion.div>

      <div className="space-y-12">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <section.icon size={120} className="text-accent-cyan" />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-cyan-400/30 flex items-center justify-center">
                <section.icon className="text-accent-cyan h-5 w-5" />
              </div>
              <h2 className="text-2xl font-display font-bold text-white group-hover:neon-text-cyan transition-all">
                {section.title}
              </h2>
            </div>
            
            <div className="text-white/70 leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </motion.section>
        ))}
      </div>

      <footer className="mt-20 pt-10 border-t border-white/10 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} @i-Factory Strategic AI Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Helper component for missing icon in sections
function BrainCircuit(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.105V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-1.03a3 3 0 0 0-5.97 0H12" />
      <path d="M9 13a4.5 4.5 0 0 0 3 4" />
      <path d="M6.003 5.125A3 3 0 1 0 12 5" />
      <path d="M12 11.5V15" />
    </svg>
  );
}
