import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router';
import { Arimo } from "next/font/google";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IntlProvider } from "react-intl";
import { gsap } from "gsap";

import "@components/style.css";

import SEO from '@components/meta/SEO';
import Header from '@components/ui/header';
import Footer from "@components/ui/footer";

const arimo = Arimo({
    subsets: ["latin"],
    display: "swap",
    weight: "400"
});

import en from "@lang/en.json";
import fr from "@lang/fr.json";

const langs = { en, fr }

export default ({ Component, pageProps: { ...pageProps }}) => {
    const { locale } = useRouter();
    const component = useRef(null);

    useEffect(() => {
        AOS.init({
             duration: 800,
             once: true,
           })
     }, []);

     useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                ".bg",
                {
                    x: -300,
                    opacity: 0
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 4,
                    delay: 0.5,
                    ease: "sine.out(0.5,1)"
                },
                "<"
            )
        });
    });

    return (
        <IntlProvider locale={locale} messages={langs[locale]}>
            <SEO />
            <div ref={component} className={`relative flex flex-col min-h-screen bg-slate-900 text-slate-100 ${arimo.className}`}>
                <Header />
                <Component {...pageProps} />
                <Footer />
                <div key="gradient" className="absolute bg inset-0 z-10 max-h-screen gradient-hero1" />
                <div key="noise" className="absolute inset-0 z-20 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light" />
            </div>
        </IntlProvider>
    )
}