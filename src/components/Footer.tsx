import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-xl font-bold tracking-tighter text-primary">
              RAMESH<span className="text-foreground/60">JAJULA</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ramesh Jajula. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <Heart size={14} className="text-red-500 fill-red-500" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
