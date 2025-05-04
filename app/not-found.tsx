import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen flex p-6">
            <section className='flex flex-col justify-center items-start'>
                <h1 className="text-6xl font-bold text-primary/85 mb-4">404</h1>
                <p className="text-xl mb-6 text-primary-gray">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <Link
                    href="/"
                    className="text-primary font-bold text-lg hover:text-primary-hover transition-colors"
                >
                    Go Home
                </Link>
            </section>
        </main>
    );
}
