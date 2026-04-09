import { motion } from "motion/react";
import { Button } from "@/src/components/ui/button";
import { ArrowRight, Github, Code2, Sparkles, Globe, Shield, Zap, Layers } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background">
      {/* Immersive Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay pointer-events-none" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-[10px] uppercase tracking-[0.2em] font-bold text-primary mb-8">
              <Sparkles size={12} className="text-primary" />
              <span>Lead AI Solutions Architect | 50+ Enterprise Projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1] text-foreground">
              Designing Production-Grade <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/40">
                Enterprise AI Systems.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl leading-relaxed font-light">
              I specialize in building end-to-end GenAI systems—from Agentic RAG and NL2SQL to 
              multi-agent orchestration—integrated with Microsoft Teams, SharePoint, and 
              enterprise workflows across Manufacturing, Banking, and Compliance.
            </p>

            <div className="flex flex-wrap gap-6 mb-20">
              <Button size="lg" className="h-14 px-8 rounded-full bg-primary text-white hover:bg-primary/90 text-base font-semibold gap-3 group shadow-lg shadow-primary/20">
                View Case Studies <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-border hover:bg-muted text-base font-semibold gap-3">
                <Globe size={20} /> Architecture Patterns
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-border pt-12">
              {[
                { label: "Scale", icon: <Zap size={16} />, value: "50+ Projects" },
                { label: "Expertise", icon: <Shield size={16} />, value: "Agentic AI" },
                { label: "Industries", icon: <Globe size={16} />, value: "Global" },
                { label: "Delivery", icon: <Code2 size={16} />, value: "Production" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex items-center gap-2 text-muted-foreground">
                    {stat.icon}
                    <span className="text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
                  </div>
                  <span className="text-2xl font-bold text-foreground">{stat.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3D Floating Element Placeholder / Visual Anchor */}
      <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[35%] aspect-square hidden xl:block">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-full h-full relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
          <div className="relative z-10 w-full h-full border border-border rounded-3xl bg-white/40 backdrop-blur-3xl flex items-center justify-center overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent)]" />
             <Layers size={120} className="text-primary/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
