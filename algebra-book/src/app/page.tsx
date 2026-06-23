import Link from "next/link"

export default function HomePage(){
  return(
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm font-semibold text-blue-300">
          CAPS-aligned interactive maths
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight">
          Master Solving Algebraic Equations
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-300">
          A focused interactive book for South African high school learners.
          Learn equations step by step with explanations, examples, quizzes, and visual tools.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/book"
            className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white"
          >
            Start reading
          </Link>
          <Link
            href="/buy"
            className="rounded-xl border border-slate-600 px-6 py-3 font-semibold"
          >
            Buy full topic
          </Link>
        </div>
      </section>
    </main>
  );
}
