import { motion } from "motion/react";
import { Network, GitBranch, Share2, Database, Shield, Zap } from "lucide-react";

const patterns = [
  {
    title: "Agentic RAG Pipeline",
    icon: <Network className="text-primary" />,
    description: "Multi-stage retrieval with autonomous reasoning, citation verification, and web-scraping validation.",
    components: ["Semantic Search", "Metadata Filtering", "Verification Agent", "Citation Engine"]
  },
  {
    title: "GraphRAG + NL2SQL",
    icon: <GitBranch className="text-primary" />,
    description: "Semantic graph layer over structured enterprise schemas for complex natural language data access.",
    components: ["Knowledge Graph", "Text-to-SQL", "Schema Mapping", "Query Orchestrator"]
  },
  {
    title: "Multi-Agent Orchestration",
    icon: <Share2 className="text-primary" />,
    description: "Coordinating specialized agents using A2A and MCP patterns for complex workflow automation.",
    components: ["Task Planner", "Agent Registry", "Inter-Agent Comms", "Human Escalation"]
  },
  {
    title: "Document Intelligence",
    icon: <Database className="text-primary" />,
    description: "High-volume extraction and validation workflows with built-in exception handling and routing.",
    components: ["OCR Engine", "Entity Extraction", "Validation Rules", "Routing Logic"]
  },
  {
    title: "AI Knowledge Ops",
    icon: <Shield className="text-primary" />,
    description: "Centralized governance, evaluation, and observability for production-scale AI assistants.",
    components: ["Evaluation Framework", "Observability Stack", "Governance Engine", "Ingestion Manager"]
  },
  {
    title: "Real-time Verified Retrieval",
    icon: <Zap className="text-primary" />,
    description: "Retrieval systems that cross-verify generated answers against real-time web sources and regulatory updates.",
    components: ["Web Scraper", "Cross-Check Agent", "Source Ranking", "Update Monitor"]
  }
];

export default function ArchitecturePatterns() {
  return (
    <section id="architecture" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Reference Architectures</h2>
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Reusable Enterprise Patterns
          </h3>
          <p className="mx-auto max-w-4xl text-lg text-muted-foreground leading-relaxed">
            I build production-grade AI systems using standardized, reusable reference 
            architectures that ensure reliability, scalability, and governance across 
            diverse enterprise use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patterns.map((pattern, i) => (
            <motion.div
              key={pattern.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-muted/20 hover:bg-white hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {pattern.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{pattern.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {pattern.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {pattern.components.map(comp => (
                  <span key={comp} className="text-[10px] font-bold uppercase tracking-widest text-primary/70 bg-primary/5 px-2 py-1 rounded">
                    {comp}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
