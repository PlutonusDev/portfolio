import Link from "next/link";
import { useRouter } from "next/router"

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default () => {
    const router = useRouter();

    const links = [/*
        { href: "/", label: "Top" },
        { href: "/#about", label: "About" },
        { href: "/#projects", label: "Projects" },
        { href: "/#contact", label: "Contact" },
    */]

    return (
        <header className="sticky top-0 flex w-full h-16 py-3 items-center bg-white z-50">
            <div className="container max-w-6xl mx-auto">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-80 max-w-full">
                        <span className="font-semibold text-3xl text-dark">Joshua Hughes</span>
                    </div>
                    <div className="flex space-x-12 items-center text-xl">
                        {links.map(link => (
                            <Link href={link.href}>
                                <span className={`transition-all duration-200 ${router.asPath !== link.href ? "text-slate-500 hover:text-blue-400" : "font-semibold text-blue-500"}`}>
                                    {link.label}
                                </span>
                            </Link>
                        ))}
                        <div className="inline-flex justify-center sm:justify-end">
                            <Link href="https://github.com/PlutonusDev" className="cursor-pointer p-2 text-2xl text-slate-800 transition-all duration-150 hover:scale-125 hover:text-blue-400">
                                <FaGithub />
                            </Link>
                            <Link href="https://linkedin.in/in/plutonus" className="cursor-pointer p-2 text-2xl text-slate-800 transition-all duration-150 hover:scale-125 hover:text-blue-400">
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}