import Link from "next/link"

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 md:grid-cols-[240px_1fr]">
                <aside className="rounded-2xl border bg-slate-50 p-5">
                    <h2 className="mb-4 font-bold">Solving Algebra</h2>

                    <nav className="flex flex-col gap-2 text-sm">
                        <Link href="/book">Overview</Link>
                        <Link href="/book/lesson-1">1. What is an equation?</Link>
                        <Link href="/book/lesson-2">2. One-step equations</Link>
                        <Link href="/book/final-test">Final test</Link>
                    </nav>
                </aside>

                <article className="prose prose-slate max-w-none">{children}</article>
            </div>
        </main>
    )
}
