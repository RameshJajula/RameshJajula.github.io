import { motion } from "motion/react";
import { Code2, Database, Layout, Server, Smartphone, Terminal } from "lucide-react";

const skillGroups = [
  {
    title: "Generative AI",
    icon: <Code2 className="text-primary" />,
    skills: ["Azure OpenAI", "LangChain", "LlamaIndex", "Agentic RAG", "MCP", "A2A"]
  },
  {
    title: "Machine Learning",
    icon: <Database className="text-primary" />,
    skills: ["XGBoost", "Random Forest", "CNN", "Transformers", "BERT", "SHAP/LIME"]
  },
  {
    title: "Cloud & Data",
    icon: <Server className="text-primary" />,
    skills: ["Azure AI Foundry", "AWS SageMaker", "Google Vertex AI", "SQL Server", "Oracle", "Vector DBs"]
  },
  {
    title: "DevOps & Tools",
    icon: <Terminal className="text-primary" />,
    skills: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Git", "Terraform"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Technical Stack</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive suite of technologies leveraged to build 
            robust, enterprise-grade AI solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-muted/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {group.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-6">{group.title}</h4>
              <ul className="space-y-4">
                {group.skills.map(skill => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
