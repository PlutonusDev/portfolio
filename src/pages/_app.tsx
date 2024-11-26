import { useEffect } from 'react'
import { Arimo } from "next/font/google";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IntlProvider } from "react-intl";

import "@components/style.css";

import Header from '@components/ui/header';
import Footer from "@components/ui/footer";

const arimo = Arimo({
    subsets: ["latin"],
    display: "swap",
    weight: "400"
});

let locale = "en";


export default ({ Component, pageProps: { ...pageProps }}) => {
    useEffect(() => {
        AOS.init({
             duration: 800,
             once: true,
           })
     }, [])

    return (
        <IntlProvider locale={locale} messages={{}}>
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