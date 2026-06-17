import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Membangun antarmuka modern dan responsif",
    icon: "Layout",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Responsive Design",
      "Component Architecture",
    ],
  },
  {
    title: "Backend & Database",
    description: "Logika server dan pengelolaan data",
    icon: "Server",
    skills: [
      "Node.js",
      "Laravel / PHP",
      "PostgreSQL",
      "MySQL",
      "REST API Design",
      "SQL Query Design",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Riset, desain, dan pengujian pengalaman pengguna",
    icon: "PenTool",
    skills: [
      "Figma",
      "Canva",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design System",
    ],
  },
  {
    title: "Programming Languages",
    description: "Bahasa yang dikuasai",
    icon: "Code",
    skills: ["JavaScript", "TypeScript", "Python", "SQL", "Bash", "PHP"],
  },
  {
    title: "Development Process",
    description: "Metodologi dan praktik pengembangan",
    icon: "GitBranch",
    skills: [
      "Agile Methodology",
      "Git / GitHub",
      "Testing",
      "Technical Documentation",
      "Performance Optimization",
      "Accessibility",
    ],
  },
  {
    title: "AI Agent Development",
    description: "Membangun dan mengorkestrasi pipeline agent AI",
    icon: "Bot",
    skills: [
      "Agent Pipeline Design",
      "AI Agent Orchestration",
      "RAG (Retrieval-Augmented Generation)",
      "Multi-Agent Coordination",
      "Prompt Engineering",
      "Documentation Automation",
    ],
  },
];
