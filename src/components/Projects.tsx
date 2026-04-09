import { motion } from "motion/react";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { Button } from "@/src/components/ui/button";

const projects = [
  {
    title: "Manufacturing Knowledge Copilot",
    industry: "Manufacturing",
    challenge: "Plant operators spent excessive time searching for SOPs and technical manuals across fragmented documentation.",
    solution: "An Agentic RAG assistant integrated with web and Teams, providing instant access to plant knowledge with citation-based verification.",
    architecture: "Ingestion pipeline, chunking/indexing, metadata filtering, retrieval orchestration, answer verification.",
    impact: "Improved access to SOPs, reduced manual search effort, and enhanced operational support.",
    tradeoffs: "Latency vs verification depth, retrieval breadth vs precision.",
    image: "https://picsum.photos/seed/manufacturing/800/600",
    tags: ["Agentic RAG", "Teams", "Manufacturing"]
  },
  {
    title: "Educational AI Assistant",
    industry: "Education",
    challenge: "Fragmented institutional knowledge discovery and learner assistance across multiple platforms.",
    solution: "A centralized AI assistant for institutional content and student support with governed retrieval.",
    architecture: "Multi-source ingestion, semantic search, role-aware retrieval, human-in-the-loop escalation.",
    impact: "Accelerated institutional knowledge discovery and improved learner assistance response times.",
    tradeoffs: "Governance vs user flexibility, retrieval precision vs recall.",
    image: "https://picsum.photos/seed/education/800/600",
    tags: ["GenAI", "Education", "Knowledge Discovery"]
  },
  {
    title: "Compliance Intelligence Assistant",
    industry: "Banking / Compliance",
    challenge: "Teams spent too much time finding approved answers across fragmented policy documents.",
    solution: "An Agentic RAG assistant integrated with Teams and SharePoint, with citation-based retrieval and web cross-verification.",
    architecture: "Ingestion pipeline, metadata filtering, retrieval orchestration, answer verification, audit logging.",
    impact: "Reduced document search effort, improved answer consistency, accelerated compliance response time.",
    tradeoffs: "Latency vs verification depth, governance vs user flexibility.",
    image: "https://picsum.photos/seed/compliance/800/600",
    tags: ["Agentic RAG", "Banking", "Compliance"]
  },
  {
    title: "GraphRAG + NL2SQL Insight Engine",
    industry: "Enterprise Data",
    challenge: "Complex business questions required manual SQL generation and deep schema knowledge.",
    solution: "A semantic graph layer over enterprise schema for complex natural language business intelligence.",
    architecture: "Knowledge graph construction, NL2SQL mapping, query orchestration, result visualization.",
    impact: "Enabled non-technical users to query complex data, reduced BI report turnaround time.",
    tradeoffs: "Schema complexity vs query accuracy, performance vs flexibility.",
    image: "https://picsum.photos/seed/data/800/600",
    tags: ["GraphRAG", "NL2SQL", "BI"]
  },
  {
    title: "Multi-Agent Document Platform",
    industry: "Workflow Automation",
    challenge: "Manual document review and approval processes were slow and prone to human error.",
    solution: "Orchestration of specialized agents across document review, validation, and automated approvals.",
    architecture: "Multi-agent orchestration, A2A communication, document intelligence, exception handling.",
    impact: "Automated end-to-end document workflows, improved accuracy, and reduced processing time.",
    tradeoffs: "Agent autonomy vs control, system complexity vs throughput.",
    image: "https://picsum.photos/seed/workflow/800/600",
    tags: ["Multi-Agent", "Automation", "IDP"]
  },
  {
    title: "AI Knowledge Operations Platform",
    industry: "AI Governance",
    challenge: "Lack of centralized governance, evaluation, and observability for enterprise AI assistants.",
    solution: "A unified platform for ingestion, governance, evaluation, and observability of production AI systems.",
    architecture: "Governance framework, evaluation pipelines, observability dashboards, ingestion management.",
    impact: "Ensured production-grade AI reliability, improved traceability, and strengthened compliance.",
    tradeoffs: "Observability overhead vs insight depth, governance strictness vs agility.",
    image: "https://picsum.photos/seed/governance/800/600",
    tags: ["Governance", "Evaluation", "Observability"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Featured Case Studies</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Production-Grade AI Systems</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I group my work into flagship project families that demonstrate repeatable 
              architectural patterns and measurable business impact across industries.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-border hover:bg-muted gap-2">
            Explore All Repositories <ExternalLink size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden border-border bg-white hover:shadow-2xl transition-all duration-500 rounded-3xl">
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/90 backdrop-blur-md text-primary font-bold px-4 py-1.5 rounded-full border-none shadow-lg">
                        {project.industry}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col">
                    <div className="flex items-center gap-2 text-primary mb-4">
                      <Folder size={16} />
                      <span className="text-xs font-bold uppercase tracking-[0.2em]">Case Study</span>
                    </div>
                    <h4 className="text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Business Challenge</h5>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.challenge}</p>
                      </div>
                      <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">The Solution</h5>
                        <p className="text-sm text-foreground/80 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <div>
                        <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Core Architecture</h5>
                        <p className="text-xs text-muted-foreground italic">{project.architecture}</p>
                      </div>
                      <div className="flex flex-wrap gap-6">
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Impact</h5>
                          <p className="text-xs font-semibold text-primary">{project.impact}</p>
                        </div>
                        <div>
                          <h5 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Trade-offs</h5>
                          <p className="text-xs text-muted-foreground">{project.tradeoffs}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t border-border mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-primary/60 bg-primary/5 border border-primary/10 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="text-xs font-bold uppercase tracking-widest hover:bg-primary/5 text-primary gap-2">
                        Full Case Study <ArrowRight size={14} />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
