"use client";

import { useState } from "react";

const steps = [
    {
        equation: "x + 3 = 7",
        explanation: "Start with the original equation."
    },
    {
        equation: "x + 3 - 3 = 7 - 3",
        explanation: "Subtract 3 from both sides."
    },
    {
        equation: "x = 4",
        explanation: "The solution is x = 4.",
    },
];

export default function EquationBalancer(){
    const [step, setStep] = useState(0)

    return (
        <div className="my-8 rounded-2xl border bg-blue-50 p-6">
            <p className="text-sm font-semibold text-blue-700">
                Interactive equation balancer
            </p>

        <div className="my-6 rounded-xl bg-white p-6 text-center text-3xl font-bold">
            {steps[step].equation}
        </div>

        <p className="mb-4 text-slate-700">{steps[step].explanation}</p>

        <div className="flex gap-3">
            <button
                onClick={() => setStep(Math.max(0, step - 1))}
                className="rounded-1g border px-4 py-2" ></button>

        <button
            onClick={() => setStep(Math.min(steps.length -1, step + 1))}
            className="rounded-1g bg-blue-600 px-4 py-2 text-white">
                Next step
            </button>
        </div>
        </div>
    );
}