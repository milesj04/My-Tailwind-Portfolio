import { ArrowDown } from "lucide-react";
import Headshot from "@/assets/Headshots/MilesHeadShot-Hyper.jpg";

export const HeroSection = () => {
    return ( 
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4">  
        <div className="container max-w-4xl mx-auto text-center z-10 pt-24 pb-25">
            <div className="space-y-6">
                
               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                    <span className="opacity-0 animate-fade-in block ">Hi, I'm</span>

                    <span className="opacity-0 animate-fade-in-delay-1 block">
                        <span className="text-glow-outline text-white 
                        [text-shadow:_0_0_8px_rgba(139,92,246,0.8),_0_0_12px_rgba(139,92,246,0.9)]">
                            Miles </span>
                        <span className="text-glow-outline text-white 
                            [text-shadow:_0_0_8px_rgba(139,92,246,0.8),_0_0_12px_rgba(139,92,246,0.9)]">
                            Jennings</span>
                    </span>
                </h1>
                <div className="flex justify-center">
                    <div className="p-[3px] rounded-full bg-gradient-to-r from-primary to-purple-500 
                    shadow-[0_0_30px_8px_rgba(139,92,246,0.5)]">
                        <img
                            src={Headshot}
                            alt="Miles Jennings Headshot"
                            className="w-52 h-52 md:w-80 md:h-90 rounded-full object-cover opacity-0 animate-fade-in-delay-3"
                        />
                    </div>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-100 animate-fade-in-delay-1">
                    From HyperXite’s Hyperloop control system to low-voltage electrical infrastructure design at P2S Engineering, I build systems meant to perform in the real 
                    world. I thrive on engineering challenges that combine electronics, software, and hands-on problem-solving.
                    
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-5">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-7 w-7 text-primary" />

        </div>
    </section>
    );
};