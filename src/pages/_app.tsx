import { useEffect } from 'react'
import { useRouter } from 'next/router';
import { Arimo } from "next/font/google";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IntlProvider } from "react-intl";

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

    useEffect(() => {
        AOS.init({
             duration: 800,
             once: true,
           })
     }, [])

    return (
        <IntlProvider locale={locale} messages={langs[locale]}>
            <SEO />
            <div className={`relative flex flex-col min-h-screen bg-slate-900 text-slate-100 ${arimo.className}`}>
                <Header />
                <Component {...pageProps} />
                <Footer />
                <div className="absolute bg inset-0 z-10 max-h-screen gradient-hero1" />
                <div className="absolute inset-0 z-20 h-full bg-[url('/noisetexture.jpg')] opacity-20 mix-blend-soft-light" />
            </div>
        </IntlProvider>
    )
}