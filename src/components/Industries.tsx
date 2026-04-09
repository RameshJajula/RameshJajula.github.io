import { motion } from "motion/react";
import { Factory, GraduationCap, ShieldCheck, Landmark, Globe2, BarChart4 } from "lucide-react";

const industries = [
  {
    title: "Manufacturing",
    icon: <Factory className="text-primary" />,
    description: "Improving access to SOPs, technical manuals, and plant knowledge through intelligent document retrieval.",
    impact: "Reduced downtime, faster onboarding, and enhanced safety compliance."
  },
  {
    title: "Education",
    icon: <GraduationCap className="text-primary" />,
    description: "Supporting institutional knowledge discovery and learner assistance with centralized AI platforms.",
    impact: "Improved student engagement, streamlined administrative workflows, and personalized learning support."
  },
  {
    title: "Compliance",
    icon: <ShieldCheck className="text-primary" />,
    description: "Helping teams retrieve policy-aligned answers faster and strengthening traceability through governed retrieval.",
    impact: "Reduced manual review effort, accelerated response times, and improved audit readiness."
  },
  {
    title: "Banking",
    icon: <Landmark className="text-primary" />,
    description: "Designing secure AI copilots for policy retrieval, risk assessment, and workflow escalation.",
    impact: "Enhanced decision-making, improved regulatory compliance, and streamlined operations."
  },
  {
    title: "Healthcare",
    icon: <Globe2 className="text-primary" />,
    description: "Automating clinical documentation review and patient data extraction with high accuracy and privacy.",
    impact: "Reduced administrative burden, improved data accuracy, and faster patient processing."
  },
  {
    title: "Retail",
    icon: <BarChart4 className="text-primary" />,
    description: "Personalizing customer experiences and optimizing supply chain operations with predictive AI models.",
    impact: "Increased sales, improved inventory management, and enhanced customer loyalty."
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-primary mb-4">Industry Expertise</h2>
          <h3 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Enterprise Scale Impact
          </h3>
          <p className="mx-auto max-w-4xl text-lg text-muted-foreground leading-relaxed">
            My work spans diverse enterprise domains, delivering production-grade AI systems 
            that integrate with business workflows to drive measurable outcomes in 
            productivity, accuracy, and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-3xl border border-border bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {industry.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-4">{industry.title}</h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {industry.description}
              </p>
              <div className="pt-6 border-t border-border">
                <h5 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2">Measurable Impact</h5>
                <p className="text-xs text-foreground/80 italic">{industry.impact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
