import type { Agent } from "@/types";

export const agents: Agent[] = [
  {
    id: "docgen-rag",
    name: "docgen-rag",
    description:
      "RAG pre-fetch agent yang memindai kode nyata dan konfigurasi proyek untuk membangun fact pack dengan sitasi, mencegah halusinasi di semua dokumen.",
    layer: "L0",
    role: "Pre-fetch & Context Builder",
    output: "RAG-CONTEXT.md",
    category: "Core",
    features: [
      "Scans actual project code + config",
      "Every fact cited with path:line or URL",
      "Prevents hallucination by design",
      "Handles greenfield and existing projects",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-orchestrator",
    name: "docgen-orchestrator",
    description:
      "Entry point utama yang menganalisis prompt user, menentukan tipe deliverable, dan mengorkestrasi 13 subagent secara berurutan dengan loop kualitas.",
    layer: "L1",
    role: "Pipeline Coordinator",
    output: "— (Main entry point)",
    category: "Core",
    features: [
      "Analyzes user prompt for deliverable type",
      "Auto-detects SOFTWARE vs STATIS",
      "Coordinates 13 subagents sequentially",
      "Quality gate management with max 3 cycles",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-brd",
    name: "docgen-brd",
    description:
      "Business Requirement Document generator yang fokus pada nilai bisnis, tujuan, KPI, stakeholder, dan justifikasi proyek.",
    layer: "L2",
    role: "Business Analysis",
    output: "BRD.md",
    category: "Requirement",
    features: [
      "Business value & justification",
      "Goals & KPIs definition",
      "Stakeholder analysis",
      "Risk assessment",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-mrd",
    name: "docgen-mrd",
    description:
      "Marketing Requirement Document generator yang menganalisis peluang pasar, target pelanggan, dan strategi positioning.",
    layer: "L2",
    role: "Market Analysis",
    output: "MRD.md",
    category: "Requirement",
    features: [
      "Market opportunity analysis",
      "Target customer personas",
      "Competitor analysis",
      "Launch strategy",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-prd",
    name: "docgen-prd",
    description:
      "Product Requirement Document generator dengan fitur MoSCoW, user story, acceptance criteria, dan spesifikasi deliverable konkret.",
    layer: "L2",
    role: "Product Specification",
    output: "PRD.md",
    category: "Requirement",
    features: [
      "MoSCoW feature prioritization",
      "User stories & acceptance criteria",
      "Functional & non-functional requirements",
      "Deliverable specifications",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-srs",
    name: "docgen-srs",
    description:
      "Software Requirement Specification dengan arsitektur detail, tech stack, constraint teknis, dan fase implementasi.",
    layer: "L2",
    role: "Technical Specification",
    output: "SRS.md",
    category: "Requirement",
    features: [
      "Architecture & tech stack",
      "Detailed functional specs",
      "Technical constraints & paths",
      "Implementation phases",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-reviewer",
    name: "docgen-reviewer",
    description:
      "Cross-document reviewer yang memvalidasi konsistensi, kelengkapan, dan grounding RAG, menghasilkan laporan temuan CRITICAL/WARNING/INFO.",
    layer: "L5",
    role: "Quality Gate",
    output: "REVIEW_REPORT.md",
    category: "Quality",
    features: [
      "Cross-document consistency check",
      "Traceability matrix generation",
      "CRITICAL findings (must fix)",
      "PASS / PASS WITH WARNINGS status",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-agentsmd",
    name: "docgen-agentsmd",
    description:
      "AGENTS.md generator yang menulis panduan operasional lengkap untuk executor agent, langsung bisa dipakai tanpa penjelasan tambahan.",
    layer: "L6",
    role: "Build Guide Generator",
    output: "AGENTS.md",
    category: "Guide",
    features: [
      "Standalone operational guide",
      "For any executor agent (Claude Code, OpenCode, Cursor, etc.)",
      "All context in one file",
      "Zero re-explanation needed",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
  {
    id: "docgen-exec-prompt",
    name: "docgen-exec-prompt",
    description:
      "Execution prompt generator yang menyusun prompt siap-tempel untuk executor agent membangun deliverable sesuai spesifikasi.",
    layer: "L7",
    role: "Execution Prompt Builder",
    output: "EXECUTION-PROMPT.md",
    category: "Guide",
    features: [
      "Ready-to-paste execution prompt",
      "Includes all document context",
      "For autonomous build execution",
      "Compatible with any AI coding agent",
    ],
    githubUrl: "https://github.com/agrianwahab29/agents-docgen-complete-suite",
  },
];

export const agentPipelineStats = {
  totalAgents: 14,
  totalLayers: 8,
  layers: [
    { layer: "L0", name: "RAG Pre-fetch", description: "Scans real code + config" },
    { layer: "L1", name: "Orchestrator", description: "Coordinates 13 subagents" },
    { layer: "L2", name: "Requirement Docs", description: "BRD → MRD → PRD → SRS" },
    { layer: "L3", name: "Technical Docs", description: "DB, Architecture, UI/UX, API" },
    { layer: "L4", name: "QA Doc", description: "Test plan & coverage" },
    { layer: "L5", name: "Quality Gate", description: "Cross-doc review" },
    { layer: "L6", name: "Build Guide", description: "AGENTS.md output" },
    { layer: "L7", name: "Exec Prompt", description: "Ready-to-paste prompt" },
  ],
  keyFeatures: [
    "Anti-hallucination by design",
    "End-to-end traceability",
    "Quality gate with loop",
    "Conditional generation",
    "Standalone output",
  ],
  supportedDeliverables: [
    { type: "SOFTWARE", description: "Full 14-output package" },
    { type: "STATIS", description: "RAG + Requirement + Guide only" },
  ],
};
