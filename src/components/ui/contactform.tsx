import { useRef, useState } from "react";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { useIntl } from "react-intl";
import ReCAPTCHA from "react-google-recaptcha";

import { LuMailCheck } from "react-icons/lu";
import { VscLoading } from "react-icons/vsc";

export type FormData = {
    name: string;
    email: string;
    message: string;
}

export default () => {
    const intl = useIntl();
    const { locale } = useRouter();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const { register, handleSubmit } = useForm<FormData>();
    const [waiting, setWaiting] = useState(false);
    const [failure, setFailure] = useState("");
    const [success, setSuccess] = useState("");

    async function onSubmit(data: FormData) {
        setWaiting(true);
        setFailure("");
        setSuccess("");

        const token = await recaptchaRef.current.executeAsync();

        if (token) {
            const resp = await fetch("/api/email", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token, locale, ...data }),
            });

            let respData = await resp.json();

            if (resp.status != 200) return setFailure(respData.message);
            setSuccess(respData.message);
        }
    }

    return (
        <form id="contact" className="relative z-40" onSubmit={handleSubmit(onSubmit)}>
            <div className="container max-w-7xl px-8 lg:mx-auto py-24">
                <h1 className="text-5xl font-semibold">{intl.formatMessage({ id: "connect.heading" }).split(" ")[0]} <span className="text-blue-500">{intl.formatMessage({ id: "connect.heading" }).split(" ").slice(1).join(" ")}</span></h1>

                <ReCAPTCHA
                    sitekey={"6Ld6jfMfAAAAAOUKA4jYgZwW1uPRnyXCxZZPXlwQ"}
                    ref={recaptchaRef}
                    theme="dark"
                    size="invisible"
                />

                <div className="mt-12 mb-5 grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
                    <div className="flex flex-col space-y-8">
                        <div key="name">
                            <label htmlFor="name" className="mb-1 block text-base font-medium">{intl.formatMessage({ id: "connect.fullname" })}</label>
                            <input disabled={waiting} type="text" placeholder={intl.formatMessage({ id: "connect.fullname" })} className="w-full rounded-md ring-2 ring-slate-500 bg-slate-800 py-2 px-3 text-base font-medium text-slate-100 outline-none focus:ring-blue-500 focus:shadow-md transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-300 disabled:cursor-not-allowed" {...register("name", { required: true })} />
                        </div>
                        <div key="email">
                            <label htmlFor="email" className="mb-1 block text-base font-medium">{intl.formatMessage({ id: "connect.email" })}</label>
                            <input disabled={waiting} type="text" placeholder={intl.formatMessage({ id: "connect.email.hint" })} className="w-full rounded-md ring-2 ring-slate-500 bg-slate-800 py-2 px-3 text-base font-medium text-slate-100 outline-none focus:ring-blue-500 focus:shadow-md transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-300 disabled:cursor-not-allowed" {...register("email", { required: true })} />
                        </div>
                        <div key="submit" className="hidden lg:flex flex-col space-y-4">
                            <span className={`h-6 ${failure ? "text-red-500" : "text-green-500"}`}>{failure && intl.formatMessage({ id: "connect.fail" })}{success && intl.formatMessage({ id: "connect.success" })}</span>
                            <button
                                disabled={waiting}
                                className={`border-solid border-1 border-gray-300 rounded-md p-2 bg-blue-500 text-white disabled:cursor-not-allowed ${waiting && !success ? "disabled:bg-slate-600 disabled:text-slate-300" : "disabled:bg-green-600 disabled:text-green-300"}`}
                                type="submit"
                            ><div className="flex justify-center">{waiting ? !success ? <VscLoading className="animate-spin text-xl" /> : <LuMailCheck className="animate-pulse text-xl" /> : <span>{intl.formatMessage({ id: "connect.send" })}</span>}</div></button>
                        </div>
                    </div>
                    <div className="col-span-2 mt-8 lg:mt-0">
                        <label htmlFor="message" className="mb-1 block text-base font-medium">{intl.formatMessage({ id: "connect.message" })}</label>
                        <textarea disabled={waiting} placeholder={intl.formatMessage({ id: "connect.message.hint" })} className="w-full resize-none h-64 rounded-md ring-2 ring-slate-500 bg-slate-800 py-2 px-3 text-base font-medium text-slate-100 outline-none focus:ring-blue-500 focus:shadow-md transition-all duration-300 disabled:bg-slate-600 disabled:text-slate-300 disabled:cursor-not-allowed" {...register("message", { required: true })} />
                        <span className="float-right text-slate-400 italic">{intl.formatMessage({ id: "connect.disclaimer" })}</span>
                    </div>
                    <div key="submit" className="lg:hidden flex flex-col space-y-2">
                    <span className={`h-6 ${failure ? "text-red-500" : "text-green-500"}`}>{failure && intl.formatMessage({ id: "connect.fail" })}{success && intl.formatMessage({ id: "connect.success" })}</span>
                        <button
                            disabled={waiting}
                            className={`border-solid border-1 border-gray-300 rounded-md p-2 bg-blue-500 text-white disabled:cursor-not-allowed ${waiting && !success ? "disabled:bg-slate-600 disabled:text-slate-300" : "disabled:bg-green-600 disabled:text-green-300"}`}
                            type="submit"
                        ><div className="flex justify-center">{waiting ? !success ? <VscLoading className="animate-spin text-xl" /> : <LuMailCheck className="animate-pulse text-xl" /> : <span>{intl.formatMessage({ id: "connect.send" })}</span>}</div></button>
                    </div>
                </div>
            </div>
        </form>
    )
}