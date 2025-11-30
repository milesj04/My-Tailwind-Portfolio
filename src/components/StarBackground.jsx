import { useEffect, useState } from "react";


export const StarBackground = () => {
    //id, size, x, y, opacity, animationduration <-- star properties
    const [stars, setStars] = useState([]);    //list of stars
    //id, size, x, y, delay, animationduration <-- meteor properties
    const [meteors, setMeteors] = useState([]); //list of meteors

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);     //need empty dependency array so it only runs once on mount
    
    
    const generateStars = () => {
        //generate stars based on size of window
        const numStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);  //change 10000 to add more stars/density of stars
        const newStars = [];
        for (let i = 0; i < numStars; i++){
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,   //generates star of size between 1 and 4 pixels
                x: Math.random() * 100,         //x position in vw 
                y: Math.random() * 100,         //y position in vh
                opacity: Math.random() * 0.5 + 0.5, //duration between 5s and 10s
                animationDuration: Math.random() * 4 + 2, //duration between 5s and 10s
            });
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numOfMeteors = 3;  //change 10000 to add more stars/density of stars
        const newMeteors = [];
        for (let i = 0; i < numOfMeteors; i++){
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,   //generates star of size between 1 and 4 pixels
                x: Math.random() * 80,         //x position in vw 
                y: Math.random() * 25,         //y position in vh
                delay: Math.random() * 20,  //delay between 0s and 15s
                animationDuration: Math.random() * 3 + 3, //duration between 5s and 10s
            });
        }
        setMeteors(newMeteors);
    };

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div    //self closing div
                 key={star.id} 
                 className="star animate-pulse-subtle" 
                 style= {{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    opacity: star.opacity,
                    animationDuration: star.animationDuration + "s",
                 }} 
                 />
            ))}

            {meteors.map((meteor) => (
                <div    //self closing div
                 key={meteor.id} 
                 className="meteor animate-meteor" 
                 style= {{
                    width: meteor.size * 50  + "px",
                    height: meteor.size * 1.5 + "px",
                    left: meteor.x + "%",
                    top: meteor.y + "%",
                    animationDelay: meteor.delay,
                    animationDuration: meteor.animationDuration + "s",
                 }} 
                 />
            ))}
         </div>
    );
};