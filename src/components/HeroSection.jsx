import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return ( 
    <section id="hero" className="relative min-h-screen flex flex-col justify-center px-4">  
        <div className="container max-w-4xl mx-auto text-center z-10 pt-24">
            <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Miles</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Jennings</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    From HyperXite’s Hyperloop control system to IT infrastructure design at P2S Engineering, I build systems meant to perform in the real 
                    world. I thrive on engineering challenges that combine electronics, firmware, and hands-on problem-solving.
                    
                </p>
                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-7 w-7 text-primary" />

        </div>
    </section>
    );
};