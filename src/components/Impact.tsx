import { motion } from "motion/react";
import { TrendingUp, Clock, CheckCircle2, ShieldAlert, Users2, DollarSign } from "lucide-react";

const metrics = [
  {
    label: "Productivity",
    value: "40%",
    description: "Reduction in manual document search and retrieval effort across enterprise teams.",
    icon: <TrendingUp className="text-primary" />
  },
  {
    label: "Response Time",
    value: "10x",
    description: "Faster compliance and policy-aligned answer generation compared to manual review.",
    icon: <Clock className="text-primary" />
  },
  {
    label: "Accuracy",
    value: "98%",
    description: "Retrieval precision through Agentic RAG and citation-based verification systems.",
    icon: <CheckCircle2 className="text-primary" />
  },
  {
    label: "Compliance",
    value: "100%",
    description: "Traceability and audit logging for all AI-generated responses in regulated domains.",
    icon: <ShieldAlert className="text-primary" />
  },
  {
    label: "Adoption",
    value: "50k+",
    description: "Active users across Microsoft Teams and SharePoint integrated AI copilots.",
    icon: <Users2 className="text-primary" />
  },
  {
    label: "Cost Savings",
    value: "$2M+",
    description: "Estimated annual operational savings through automated document processing workflows.",
    icon: <DollarSign className="text-primary" />
  }
];

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Measurable Outcomes</h2>
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Business Value Delivered
          </h3>
          <p className="mx-auto max-w-4xl text-lg text-muted-foreground leading-relaxed">
            My work is measured not just by technical complexity, but by the tangible 
            impact it has on enterprise operations, productivity, and the bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl border border-border bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
                {metric.icon}
              </div>
              <div className="text-5xl font-extrabold text-foreground mb-2">{metric.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-primary mb-4">{metric.label}</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
