import { ArrowDown } from "lucide-react";
import Headshot from "@/assets/Headshots/MilesHeadShot-Hyper.jpg";
import HyperTeamPhoto from "@/assets/Headshots/HX11TeamPhotoFinal.jpg";
import InternGroupPhoto from "@/assets/Headshots/intern group pic.jfif";
export const HeroSection = () => {
    return ( 
    <section id="hero" className="relative min-h-screen flex flex-col justify-start pt-32 px-4">  
        <div className="container max-w-4xl mx-auto text-center z-10 pt-24">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
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
        {/* Fading images */}
        <div className="absolute bottom-40 left-1/2 w-[90%] max-w-3xl h-[400px] -translate-x-1/2">
            <img src={Headshot} className="fade-img fade-delay-0" />
            <img src={HyperTeamPhoto} className="fade-img fade-delay-4" />
            <img src={InternGroupPhoto} className="fade-img fade-delay-8" />
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />

        </div>
    </section>
    );
};