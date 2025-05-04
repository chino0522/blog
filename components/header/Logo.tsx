import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/" className="text-xl font-semibold text-primary hover:text-primary-hover">
            <div className="w-10 h-12 border-l-2 border-accent flex items-center justify-center p-5 px-7 relative border-primary hover:border-primary-hover transition-colors">
                <span className="text-accent font-bold text-2xl transition-colors">JB</span>
            </div>
        </Link>
    )
}

export default Logo;