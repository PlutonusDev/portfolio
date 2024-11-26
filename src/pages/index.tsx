import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Spline from '@splinetool/react-spline';

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

export default () => {
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
                ".bg",
                {
                    x: -300,
                    opacity: 0
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 4,
                    ease: "sine.out(0.5,1)"
                },
                "<"
            )

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
                        <h1 className="text-7xl pb-2 drop-shadow-[0_4px_2px_rgba(0,0,0,0.8)]">{renderLetters("JOSHUA")} {renderLetters("HUGHES")}</h1>
                        <h2 className="text-4xl font-semibold job-title drop-shadow-[0_2px_1px_rgba(0,0,0,0.8)]">Senior Software Engineer / Fullstack Developer</h2>
                    </div>
                    <div className="z-40 mx-auto">
                        <Spline className="hidden xl:block orbit" scene="/orbit.splinecode" />
                    </div>
                </div>
            </div>
            <div className="min-h-[calc(100vh-64px)]" />
            <div className="bg-slate-100 shadow-2xl w-full h-4" />

            <div id="about" className="relative">
                <div className="container max-w-7xl mx-auto py-24">
                    <h1 className="text-5xl font-semibold">Who am I?</h1>
                    <div className="flex space-x-24">
                        <div className="flex flex-col mt-8 space-y-4 text-xl">
                            <p key={1}>
                                Hey there! I'm Josh, a software engineer who loves all things tech and aviation.
                                Originally from Cairns, Australia, I'm currently soaking up the French lifestyle (and the amazing food!)
                                on a working holiday visa. I'll be here until September 2025, so if you're nearby, let's connect!
                                I've worn many hats in my career, from building software development teams from scratch to leading
                                exciting projects in the world of aviation simulation. I'm passionate about creating user-friendly software,
                                and I'm always up for a challenge.
                            </p>
                            <p key={2}>
                                My toolkit includes languages and frameworks like C#, React, and TypeScript, which I use to build everything
                                from web apps to APIs. One of my proudest achievements was leading a team to develop vatACARS, a comprehensive
                                text communication suite for air traffic control simulation. It was a real test of my technical, leadership,
                                and organizational skills, and I loved every minute of it.
                            </p>
                            <p key={3}>
                                But I'm not just about code. I believe in putting the user first and crafting intuitive, enjoyable experiences.
                                I'm also a big believer in teamwork and open communication.
                                When I'm not geeking out over the latest tech or flying high in the virtual skies, you can find me exploring new
                                places, trying new things, and connecting with interesting people.
                                If you're looking for someone who's passionate, creative, and committed to quality, let's chat! I'm always excited
                                to collaborate and build something amazing.
                            </p>
                        </div>
                        <img className="h-[512px] p-1 rounded shadow-xl ring-2 ring-slate-500 z-40" src="/joshua.jpg" />
                    </div>
                    
                    <h2 className="text-4xl font-bold mt-16">Technologies</h2>
                    <div className="grid grid-cols-7 gap-x-4 gap-y-2 mt-6">
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
                <div className="absolute top-0 w-full h-full gradient-hero2" />
            </div>

            <div className="bg-slate-100 shadow-2xl w-full h-4" />

            <div id="projects" className="relative z-40">
                <div className="container max-w-7xl mx-auto py-24">
                    <h1 className="text-5xl font-semibold">Recent <span className="text-blue-500">Projects</span></h1>
                    <ul className="divide-y divide-gray-200 mt-8">
                        <Project title="vatACARS Communications Suite" date="2022 - Current" imageurl="/projects/vatacars.png" summary="
                            vatACARS enhances the vatSys air traffic control simulation platform by incorporating realistic ACARS functionality. This plugin allows virtual pilots and controllers to communicate via text messages, mirroring real-world aviation procedures and creating a more immersive and engaging experience for both. By seamlessly integrating this essential communication tool, vatACARS adds a new layer of realism to flight simulation.
                        " href="https://github.com/vatACARS" tags={[{ label: "TypeScript", icon: <SiTypescript/> }, { label: "NodeJS", icon: <SiNodedotjs /> }, { label: "C#", icon: <SiCsharp /> }, { label: ".NET", icon: <SiDotnet /> }, { label: "Electron", icon: <SiElectron /> }, { label: "NextJS", icon: <SiNextdotjs /> }, { label: "NestJS", icon: <SiNestjs /> }, { label: "MongoDB", icon: <SiMongodb /> }]} />
                        {/*<Project title="vatACARS Communications Suite" date="2022 - Current" href="" summary="test" tags={["TypeScript", "C#", "NextJS", "NestJS"]} />
                        <Project title="vatACARS Communications Suite" date="2022 - Current" href="" summary="test" tags={["TypeScript", "C#", "NextJS", "NestJS"]} />*/}
                    </ul>
                </div>
            </div>
        </main>
    )
}