import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
    // Programming Languages
    { name: "Python", category: "languages" },
    { name: "C/C++", category: "languages" },
    { name: "Java", category: "languages" },
    { name: "Tailwind CSS", category: "languages" },
    { name: "React.js", category: "languages" },
    { name: "Typescript", category: "languages" },
    { name: "Verilog", category: "languages" },
    { name: "RISC-V", category: "languages" },
    { name: "MIPS Assembly", category: "languages" },

    // Tools
    { name: "Git/GitHub", category: "tools" },
    { name: "Arduino", category: "tools" },
    { name: "VS Code", category: "tools" },
    { name: "Linux", category: "tools" },
    { name: "LTSpice", category: "tools" },
    { name: "Cadence", category: "tools" },
    { name: "Vivado", category: "tools" },
    { name: "Revit", category: "tools" },
    { name: "AutoCAD", category: "tools" },
    { name: "BlueBeam", category: "tools" },
    { name: "Figma", category: "tools" },

    // Hardware
    { name: "Oscilloscope", category: "hardware" },
    { name: "Multimeter", category: "hardware" },
    { name: "Microcontrollers", category: "hardware" },
    { name: "Power Supplies", category: "hardware" },
];

const categories = ["all", "languages", "tools", "hardware"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return ( 
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
        <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, key) => (
                <button
                    key={key}
                    onClick={() => setActiveCategory(category)}
                    className={cn
                        ("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-forefround hover:bg-secondary"

                        )}> 
                        {category}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredSkills.map((skill, key) => (
                <div key={key} className="bg-card px-3 py-3 rounded-md border border-border/60 shadow-xs card-hover min-h-0">
                    <div className="flex h-full items-center justify-center text-center">
                        <h3 className="text-sm sm:text-[15px] font-semibold leading-tight">{skill.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>
    );
};