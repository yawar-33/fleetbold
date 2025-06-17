"use client";

import { ReactNode, useEffect, useState } from "react";
import { InfiniteMovingCards } from "./moving-cards";
import { testimonialData } from "./testimonialData";


export default function TestimonialScrolling() {
    const [shuffledSkillsChunks, setShuffledSkillsChunks] = useState<
        Array<Array<[string, any]>>
    >([]);

    useEffect(() => {
        const skillsArr = Object.entries(testimonialData);
        const shuffledArray = [...skillsArr].sort(() => Math.random() - 0.5);
        const chunkSize = Math.ceil(shuffledArray.length / 2); // Divide into 2 rows
        const chunkedArray = Array.from({ length: 2 }, (_, index) =>
            shuffledArray.slice(index * chunkSize, (index + 1) * chunkSize)
        );
        setShuffledSkillsChunks(chunkedArray);
    }, []);

    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
            {shuffledSkillsChunks.map((chunk, index) => (
                <InfiniteMovingCards
                    key={index}
                    skills={chunk}
                    direction={index % 2 === 0 ? "right" : "left"} // alternate direction
                    speed="slow"
                />
            ))}
        </div>
    );
}