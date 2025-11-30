import { Briefcase, Code, Hammer, User } from "lucide-react";
import Resume_HW from "@/assets/CVs/Miles__Resume_HW.pdf";
import Resume_SW from "@/assets/CVs/Miles__Resume_SW.pdf";
import RunClub from "@/assets/Headshots/thumbnail_runclub.jpg";
import HyperTeamPhoto from "@/assets/Headshots/HX11TeamPhotoFinal.jpg";
import InternGroupPhoto from "@/assets/Headshots/intern group pic.jfif";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">
                        Me
                    </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> Passionate Computer Engineer</h3>
                        <p className="text-lg text-muted-foreground">
                            I’m a Computer Engineering student at the University of California, Irvine, driven by a passion for sustainability, hands-on innovation, 
                            and purposeful technology. I’ve developed technical experience in both software and hardware, from embedded systems to 
                            application development.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            Over the past few years, I’ve worked across both industry and student engineering teams. Ranging from designing low-voltage and IT 
                            infrastructure at P2S Engineering to developing control hardware for the Hyperloop pod at HyperXite. Alongside these roles, 
                            I’ve built hands-on projects like a gesture-controlled rover, a remote cargo drone, and an audio-reactive wearable. 
                            These experiences have shaped me as a computer engineer, helping me bridge the gap between hardware and software to build reliable, 
                            real-world systems.

                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a href={Resume_HW} target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Hardware Resume
                            </a>
                            <a href={Resume_SW}  target="_blank" rel="noopener noreferrer"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Software Resume
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Full-Stack Development
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Creating responsive and dynamic applications using various programming languages.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Hammer className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Embedded Systems
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Developing embedded solutions that combine microcontrollers, sensor data, and programming to power real-world technology.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">
                                        Project Management
                                    </h4>
                                    <p className="text-muted-foreground">
                                        Leading projects from conception to completion with effective planning and teamwork.
                                    </p>
                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>
                {/* fading images BELOW the section */}
                <div className="relative w-full mt-20 flex justify-center">
                    <div className="w-[90%] max-w-3xl h-[400px]">
                        <img src={HyperTeamPhoto} className="fade-img fade-delay-0" />
                        <img src={InternGroupPhoto} className="fade-img fade-delay-4" />
                    </div>
                </div>
            </div>
        </section>
    );
};