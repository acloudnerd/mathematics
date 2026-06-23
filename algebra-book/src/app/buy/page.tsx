import Link from "next/link";

export default function BuyPage(){
    return(
        <main className="min-h-screen bg-slate-950 px-6 py-20 text-white">
            <section className="mx-auto max-w-3xl rounded-3xl border border-slate-800 bg-slate-900 p-8">
                <p className="text-sm font-semibold text-blue-300">
                    Full interactive topic
                </p>

                <h1 className="mt-3 text-4xl font-bold">
                    Solving Algebraic Equations
                </h1>

                <p className="mt-5 text-slate-300">
                    Includes lessons, worked examples, interactive tools, quizzes,
                    and a final test.
                </p>

                <div className="mt-8 rounded-2xl bg-white p-6 text-slate-900">
                    <p className="text-sm font-semibold">Launch price</p>
                    <p className="mt-2 text-4xl font-bold">R99</p>
                </div>

                <Link
                    href="/book"
                    className="mt-8 inline-block rounded-xl bg-blue-500 px-6 py-3 font-semibold"
                    >
                        Preview book
                    </Link>
            </section> 
            </main>
    );
}