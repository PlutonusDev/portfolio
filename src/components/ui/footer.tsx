import Link from "next/link"

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default () => {
    return (
        <footer className="container mx-auto mt-12 py-20 flex flex-col items-center justify-between gap-6 py-8 lg:flex-row">
            <div className="flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
                <Link href="/" className="cursor-pointer text-xl font-extrabold tracking-tigher text-slate-100 transition-colors duration-150 hover:text-red-400">
                    Joshua Hughes
                </Link>
                <span className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline" aria-hidden={true}>|</span>
                <p className="text-sm text-slate-300">&copy; {new Date().getFullYear()} Joshua Hughes</p>
            </div>
            <div className="inline-flex justify-center sm:justify-end">
                <Link href="https://github.com/PlutonusDev" className="cursor-pointer p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-red-400">
                    <FaGithub />
                </Link>
                <Link href="https://linkedin.in/in/plutonus" className="cursor-pointer p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-red-400">
                    <FaLinkedin />
                </Link>
            </div>
        </footer>
    )
}