import React from "react";
import { motion } from "motion/react";
import { cn } from "@/src/lib/utils";
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layers, 
  Layout, 
  Shield, 
  Zap,
  BarChart3,
  Users
} from "lucide-react";

interface BentoItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const BentoItem = ({ title, description, icon, className, delay = 0 }: BentoItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={cn(
      "group relative overflow-hidden rounded-3xl border border-border bg-white p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300",
      className
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative z-10">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

export default function BentoGrid() {
  return (
    <section id="capabilities" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Capabilities</h2>
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Beyond Conversational Assistants
          </h3>
          <p className="mx-auto max-w-4xl text-lg text-muted-foreground leading-relaxed">
            I design end-to-end AI systems that combine enterprise document intelligence, 
            multi-stage agent workflows, web-verified retrieval, structured data querying, 
            and orchestrated agent collaboration using patterns such as A2A, MCP, and 
            RAG-backed knowledge sources.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
          <BentoItem
            title="Agentic RAG"
            description="Autonomous retrieval systems with citation-based verification and web cross-referencing for regulatory accuracy."
            icon={<Layers size={24} />}
            className="md:col-span-2 md:row-span-2"
            delay={0.1}
          />
          <BentoItem
            title="NL2SQL & GraphRAG"
            description="Semantic graph layers over enterprise schemas for complex natural language business intelligence."
            icon={<Zap size={24} />}
            delay={0.2}
          />
          <BentoItem
            title="Multi-Agent Orchestration"
            description="Coordinating specialized agents across document review, approvals, and complex task execution."
            icon={<Shield size={24} />}
            delay={0.3}
          />
          <BentoItem
            title="Document Intelligence"
            description="Multi-stage extraction, validation, and routing workflows for high-volume enterprise document processing."
            icon={<Globe size={24} />}
            delay={0.4}
          />
          <BentoItem
            title="Workflow Automation"
            description="Integrating AI agents directly into business processes, Microsoft Teams, and SharePoint ecosystems."
            icon={<Cpu size={24} />}
            className="md:col-span-2"
            delay={0.5}
          />
          <BentoItem
            title="A2A & MCP Patterns"
            description="Implementing standardized Agent-to-Agent and Model Context Protocol patterns for interoperability."
            icon={<Layout size={24} />}
            delay={0.6}
          />
          <BentoItem
            title="Governance & Evaluation"
            description="Robust ingestion pipelines with built-in governance, evaluation, and observability for production scale."
            icon={<Users size={24} />}
            delay={0.7}
          />
          <BentoItem
            title="Web-Verified Answers"
            description="Real-time scraping and validation to ensure AI responses align with the latest regulatory updates."
            icon={<BarChart3 size={24} />}
            delay={0.8}
          />
        </div>
      </div>
    </section>
  );
}
