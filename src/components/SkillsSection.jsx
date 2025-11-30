import { useState } from "react";
import { cn } from "@/lib/utils";


const skills = [
    // Programming Languages
    { name: "Python", level: 90, category: "languages" },
    { name: "C/C++", level: 85, category: "languages" },
    { name: "Java", level: 85, category: "languages" },
    { name: "Tailwind CSS", level: 60, category: "languages" },
    { name: "React.js", level: 60, category: "languages" },
    { name: "Typescript", level: 60, category: "languages" },
    { name: "Verilog", level: 80, category: "languages" },
    { name: "RISC-V", level: 70, category: "languages" },
    { name: "MIPS Assembly", level: 70, category: "languages" },
    

    // Tools
    { name: "Git/GitHub", level: 85, category: "tools" },
    { name: "Arduino", level: 95, category: "tools" },
    { name: "VS Code", level: 95, category: "tools" },
    { name: "Linux", level: 85, category: "tools" },
    { name: "LTSpice", level: 75, category: "tools" },
    { name: "Cadence", level: 80, category: "tools" },
    { name: "Vivado", level: 80, category: "tools" },
    { name: "Revit", level: 95, category: "tools" },
    { name: "AutoCAD", level: 95, category: "tools" },
    { name: "BlueBeam", level: 98, category: "tools" },
    { name: "Figma", level: 75, category: "tools" },

    

    //Hardware
    { name: "Oscilloscope", level: 100, category: "hardware" },
    { name: "Multimeter", level: 100, category: "hardware" },
    { name: "Microcontrollers", level: 100, category: "hardware" },
    { name: "Power Supplies", level: 100, category: "hardware" },
    
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill, key) => (
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                    <div className="text-left mb-4">
                        <h3 className="font-semibold text-lg"> {skill.name} </h3>
                    </div>
                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}/>
                    </div>
                    <div className="text-right mt-1">
                        <span> {skill.level}%</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </section>
    );
};