import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Spline from '@splinetool/react-spline';
import { useIntl } from "react-intl";

import {
    SiNestjs,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiMongodb,
    SiHtml5,
    SiNodedotjs,
    SiElectron,
    SiMysql,
    SiVercel,
    SiGit,
    SiGithub,
    SiJupyter,
    SiCsharp,
    SiDotnet
} from "react-icons/si";

import Badge from "@components/ui/badge";
import Project from "@components/ui/project";
import ContactForm from "@components/ui/contactform";

export default () => {
    const intl = useIntl();
    const component = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.fromTo(
                ".name-animation",
                {
                    x: 20,
                    opacity: 0,
                    rotate: 10,
                },
                {
                    x: 0,
                    opacity: 1,
                    rotate: 0,
                    ease: "elastic.out(1,0.3)",
                    duration: 1,
                    transformOrigin: "right top",
                    delay: 0.5,
                    stagger: {
                        each: 0.1,
                        from: "start",
                    },
                },
            );

            tl.fromTo(
                ".orbit",
                {
                    x: 300,
                    y: 30,
                    opacity: 0
                },
                {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    duration: 1.2,
                    ease: "sine.out(1,0.3)"
                },
                "<"
            )

            tl.fromTo(
                ".job-title",
                {
                    y: 20,
                    opacity: 0,
                    scale: 0.9,
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scale: 1,
                    ease: "elastic.out(0.2,0.1)",
                    delay: 1.5
                },
                "<"
            );
        }, component);
        return () => ctx.revert();
    }, []);

    const renderLetters = word => {
        if (!word) return;
        return word.split("").map((l, i) => (
            <span key={i} className="name-animation name-animation-first animate-gradient-xy inline-block animate-gradient-xy font-bold bg-gradient-to-b from-teal-500 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-0">{l}</span>
        ))
    }

    return (
        <main ref={component} className="relative min-h-screen">
            <div className="absolute top-0 left-0 w-full h-full z-40">
                <div className="flex items-center justify-center space-x-4 max-w-8xl mx-auto py-48">
                    <div className="text-white text-center xl:text-left">
                        <h1 className="text-7xl flex flex-wrap gap-x-4 justify-center lg:justify-start pb-2 drop-shadow-[0_4px_2px_rgba(0,0,0,0.8)]">
                            <span key="fname">{renderLetters("JOSHUA")}</span>
                            <span key="lname">{renderLetters("HUGHES")}</span>
                        </h1>
                        <h2 className="text-4xl pt-8 lg:py-0 font-semibold job-title drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">{intl.formatMessage({ id: "hero.jobtitle" })}</h2>
                    </div>
                    <div className="z-40 mx-auto">
                        <Spline className="hidden xl:block orbit" scene="/orbit.splinecode" />
                    </div>
                </div>
            </div>
            <div className="min-h-[calc(100vh-64px)]" />
            <div className="bg-slate-100 shadow-2xl w-full h-4" />

            <div id="about" className="relative z-40">
                <div className="container max-w-7xl px-8 lg:mx-auto py-24">
                    <h1 className="text-5xl font-semibold">{intl.formatMessage({ id: "about.heading" })}</h1>
                    <div className="lg:flex lg:space-x-24">
                        <div className="flex flex-col mt-8 space-y-4 text-xl">
                            <p key={1}>{intl.formatMessage({ id: "about.p1" })}</p>
                            <p key={2}>{intl.formatMessage({ id: "about.p2" })}</p>
                            <p key={3}>{intl.formatMessage({ id: "about.p3" })}</p>
                        </div>
                        <img className="hidden lg:block h-[512px] p-1 mt-4 lg:mt-0 rounded shadow-xl ring-2 ring-slate-500 z-40" src="/joshua.jpg" />
                        <div className="flex lg:hidden justify-center">
                            <img className="h-[512px] p-1 mt-4 lg:mt-0 rounded shadow-xl ring-2 ring-slate-500 z-40" src="/joshua.jpg" />
                        </div>
                    </div>

                    <h2 className="text-4xl font-bold mt-16">{intl.formatMessage({ id: "technologies.heading" })}</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-5 xl:grid-cols-7 gap-x-4 gap-y-2 mt-6">
                        <Badge icon={<SiJavascript />} label="JavaScript" />
                        <Badge icon={<SiTypescript />} label="TypeScript" />
                        <Badge icon={<SiCsharp />} label="C#" />
                        <Badge icon={<SiDotnet />} label=".NET" />
                        <Badge icon={<SiReact />} label="React" />
                        <Badge icon={<SiNextdotjs />} label="NextJS" />
                        <Badge icon={<SiNestjs />} label="NestJS" />
                        <Badge icon={<SiMongodb />} label="MongoDB" />
                        <Badge icon={<SiHtml5 />} label="HTML" />
                        <Badge icon={<SiNodedotjs />} label="Node.js" />
                        <Badge icon={<SiElectron />} label="Electron" />
                        <Badge icon={<SiMysql />} label="MySQL" />
                        <Badge icon={<SiVercel />} label="Vercel" />
                        <Badge icon={<SiGit />} label="Git" />
                        <Badge icon={<SiGithub />} label="Github" />
                        <Badge icon={<SiJupyter />} label="Jupyter" />
                        <p className="py-1 px-2 text-lg text-center border-2 border-transparent">and more...</p>
                    </div>
                </div>
                <div className="absolute top-0 -z-10 w-full h-full gradient-hero2" />
            </div>

            <div className="bg-slate-100 shadow-2xl w-full h-4" />

            <div id="projects" className="relative z-40">
                <div className="container max-w-7xl px-8 lg:mx-auto py-24">
                    <h1 className="text-5xl font-semibold">{intl.formatMessage({ id: "projects.heading" }).split(" ")[0]} <span className="text-blue-500">{intl.formatMessage({ id: "projects.heading" }).split(" ").slice(1).join(" ")}</span></h1>
                    <ul className="divide-y divide-gray-200 mt-8">
                        <Project title={intl.formatMessage({ id: "projects.vatacars.heading" })} date={intl.formatMessage({ id: "projects.vatacars.date" })} imageurl="/projects/vatacars.png" summary={intl.formatMessage({ id: "projects.vatacars.summary" })} href="https://github.com/vatACARS" tags={[{ label: "TypeScript", icon: <SiTypescript /> }, { label: "NodeJS", icon: <SiNodedotjs /> }, { label: "C#", icon: <SiCsharp /> }, { label: ".NET", icon: <SiDotnet /> }, { label: "Electron", icon: <SiElectron /> }, { label: "NextJS", icon: <SiNextdotjs /> }, { label: "NestJS", icon: <SiNestjs /> }, { label: "MongoDB", icon: <SiMongodb /> }]} />
                        {/*<Project title="vatACARS Communications Suite" date="2022 - Current" href="" summary="test" tags={["TypeScript", "C#", "NextJS", "NestJS"]} />
                        <Project title="vatACARS Communications Suite" date="2022 - Current" href="" summary="test" tags={["TypeScript", "C#", "NextJS", "NestJS"]} />*/}
                    </ul>
                </div>
            </div>

            <div className="bg-slate-100 shadow-2xl w-full h-4" />

            <ContactForm />
        </main>
    )
}