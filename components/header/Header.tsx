import Logo from './Logo';
import { LuExternalLink } from 'react-icons/lu';

export default function Header() {
    return (
        <div className='w-full flex justify-between items-center'>
            <Logo />
            <span className='text-lg flex gap-5'>
                <button className='hover:text-primary-hover hover:cursor-pointer'>Blogs</button>

                <a className='text-primary flex items-center gap-1 hover:cursor-pointer hover:text-primary-hover' href='https://jaydenbaek.vercel.app' target='_blank' rel='noreferrer'>
                    <p className=''>About</p>
                    <LuExternalLink />
                </a>
            </span>
        </div>
    );
}