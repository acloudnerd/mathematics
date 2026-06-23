"use client";

import { useState } from "react";

type QuizProps = {
    question: string;
    options: string[];
    answer: string;
};

export default function Quiz({question, options, answer}: QuizProps){
    const [selected, setSelected] = useState<string| null>(null);

    const isCorrect = selected === answer;

    return(
        <div className="my-8 rounded 2xl border bg-slate-50 p-6">
            <h3 className="mb-4 text-lg font-bold">{question}</h3>

            <div className="grid gap-3">
                {options.map((option) => (
                    <button 
                        key={option}
                        onClick={() => setSelected(option)}
                        className="rounded-xl border bg-white px-4 py-3 text-left hover:bg-slate-100"
                        >
                            {option}
                        </button>
                ))}
            </div>

            {selected && (
                <p className={`mt-4 font-semibold ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                    {isCorrect ? "Correct." : `Not quite. Correct answer: ${answer}`}
                </p>
            )}
        </div>
    );
    
}