import Logo from './Logo';
import Link from 'next/link';
import { LuExternalLink } from 'react-icons/lu';

export default function Header() {
    return (
        <div className='w-full flex justify-between items-center'>
            <Logo />
            <span className='text-lg flex gap-5'>
                <Link href="/blog" className="hover:text-primary-hover hover:cursor-pointer transition-colors">
                    Blog
                </Link>

                <a className='text-primary flex items-center gap-1 hover:cursor-pointer hover:text-primary-hover transition-colors' href='https://jaydenbaek.vercel.app' target='_blank' rel='noreferrer'>
                    <p className=''>About</p>
                    <LuExternalLink />
                </a>
            </span>
        </div>
    );
}