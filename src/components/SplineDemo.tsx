'use client'

import { SplineScene } from "@/src/components/ui/splite";
import { Card } from "@/src/components/ui/card"
import { Spotlight } from "@/src/components/ui/spotlight"
import { Button } from "@/src/components/ui/button";
import { Sparkles } from "lucide-react";
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[600px] bg-white relative overflow-hidden border border-border rounded-3xl shadow-2xl group">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="rgba(59, 130, 246, 0.2)"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-12 relative z-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-bold uppercase tracking-widest text-primary mb-6 w-fit">
            <Sparkles size={12} />
            <span>Next-Gen Interaction</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
            Immersive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/40">
              AI Architecture
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-md leading-relaxed font-light">
            Pushing the boundaries of digital interfaces with real-time 3D rendering. 
            Experience the future of enterprise user engagement through interactive 
            spatial design.
          </p>
          <div className="mt-10 flex gap-4">
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-8">
              Explore Scene
            </Button>
            <Button variant="ghost" className="rounded-full text-primary hover:bg-primary/5">
              Learn More
            </Button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative h-[400px] md:h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white z-10 pointer-events-none" />
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full scale-110 group-hover:scale-125 transition-transform duration-1000"
          />
        </div>
      </div>
    </Card>
  )
}
