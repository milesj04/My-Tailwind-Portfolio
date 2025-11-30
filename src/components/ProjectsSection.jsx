import { ArrowRight, CirclePlay, ExternalLink, Github } from "lucide-react";
import LeDrone from "@/assets/ProjectPDFs/Ledrone FUSIONCon Presentation.pdf";
import LeDroneVid from "@/assets/ProjectPDFs/LeDrone Demo.MOV";
import HGRvid from "@/assets/ProjectPDFs/Hand Gesture Rover.mp4";
import Chesspdf from "@/assets/ProjectPDFs/Aphrodite Chess Engine Presentation.pdf";
import Pokerpdf from "@/assets/ProjectPDFs/Poker_UserManual.pdf";
import HVACpdf from "@/assets/ProjectPDFs/HVAC System.pdf";
import Javapdf from "@/assets/ProjectPDFs/Java Projects With Swing GUI.pdf";

const projects = [
    //hardware
    {
        id:1,
        title: "Remote Precision Cargo Drone",
        description: "Played a key role in helping the hardware subteam design a drone used to deliver cargo whilst utilizing GPS and live data readings.",
        image: "/Projects/FEPLedrone/IMG_4133.JPG",
        tags: ["STM32", "GPS", "ArduPilot"],
        demoURL: LeDrone,
        githubURL: "#",
        videoURL: LeDroneVid,

    },
    {
        id:2,
        title: "Hand Gesture Rover",
        description: "Live reactive rover that converts hand tilts into directional movement.",
        image: "/Projects/HandGestureRover/IMG_6435.jpg",
        tags: ["Arduino", "NRF", "ICM"],
        demoURL: "/Projects/HandGestureRover/HGRWiringDiagram.png",
        githubURL: "#",
        videoURL: HGRvid,
    },
    {
        id:3,
        title: "HVAC System",
        description: "Small scale HVAC system that can detect environmental changes like motion detection, temperature, and door status.",
        image: "/Projects/HVACSystem/HVAC.jpg",
        tags: ["RaspberryPi", "Python"],
        demoURL: HVACpdf,
        githubURL: "#",
        videoURL: "#",

    },
    {
        id:4,
        title: "Chess Game",
        description: "Chess game that is playable vs a robot or vs another player.",
        image: "/Projects/CProjects/Chess.jpg",
        tags: ["C", "Linux", "Git", "Frontend/Backend"],
        demoURL: Chesspdf,
        githubURL: "#",
        videoURL: "#", 
    },
    {
        id:5,
        title: "Poker Game",
        description: "Poker game that is playable with up to 4 people or vs AI.",
        image: "/Projects/CProjects/Poker.jpg",
        tags: ["RaspberryPi", "Python", "Frontend/Backend"],
        demoURL: Pokerpdf,
        githubURL: "#",
        videoURL: "#",
    },
    {
        id:6,
        title: "Dictionary Application",
        description: "Dictionary application that allows user to import and export words and definitions. Also utilizing logs for most recent/common searches.",
        image: "/Projects/JavaProjects/Dictionary.jpg",
        tags: ["Frontend/Backend", "Java", "Swing"],
        demoURL: Javapdf,
        githubURL: "https://github.com/milesj04/Dictionary-W-Swing",
        videoURL: "#",

    },
    {
        id:7,
        title: "Calculator Application",
        description: "Calculator application that allows for computation as well as other complex functions such as memory computations.",
        image: "/Projects/JavaProjects/Calculator.jpg",
        tags: ["Frontend/Backend", "Java", "Swing"],
        demoURL: Javapdf,
        githubURL: "https://github.com/milesj04/Calculator-W-Swing",
        videoURL: "#",
    },

]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    {" "}
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-4 max-w-2xl mx-auto">
                    Here are some of my recent projects. These are all projects I have done as either a part of 
                    a teams or on my own. Whether that be through clubs, embedded system hackathons, or even
                    through classes. 
                </p>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    If any of the icons don't work, then there is currently no existing documentation, github repo, or video to go with the project.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((projects, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shaddow-xs card-hover">
                            <div className="aspect-[4/3] overflow-hidden bg-black/10 flex items-center justify-center ">
                                <img src={projects.image} alt={projects.title} className="w-full h-full object-contain"/>    
                        </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projects.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            <h3 className="text-xl font-semibold mb-1">{projects.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{projects.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={projects.demoURL} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={projects.githubURL} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github size={20} />
                                    </a>
                                    <a href={projects.videoURL} 
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <CirclePlay size={20} />
                                    </a>

                                </div>
                             </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                        target="_blank"
                        href="https://github.com/milesj04">
                        Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>    
        </section>
    );
};