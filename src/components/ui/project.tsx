import Link from "next/link"

export default ({ title, date, imageurl, href, summary, tags }) => {
    return (
        <li key={title} className="py-12">
            <article>
                <Link href={href} target="_blank">
                    <div className="group cursor-pointer space-y-2 xl:grid xl:grid-cols-4 xl:gap-x-4 xl:space-y-0 hover:bg-slate-700 transition-colors duration-200 p-2 rounded-lg">
                        <div className="flex flex-col space-y-2">
                            <img className="p-1 rounded shadow-xl ring-2 ring-slate-500 z-40" src={imageurl} />
                            <div>
                                <span className="text-base font-medium leading-6 text-slate-400">
                                    {date}
                                </span>
                            </div>
                        </div>
                        <div className="space-y-5 xl:col-span-3">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold leading-8 tracking-light group-hover:text-blue-500 group-hover:pl-2 transition-all duration-200">
                                        {title}
                                    </h2>
                                    <div className="flex flex-wrap space-x-2">
                                        {tags.map(tag => (<div className="px-2 rounded border-2 border-blue-500 flex space-x-2 items-center">
                                            {tag.icon}
                                            <span>{tag.label}</span>
                                        </div>))}
                                    </div>
                                </div>
                                <div className="prose max-w-none text-slate-400 group-hover:text-slate-100">
                                    {summary}
                                </div>
                            </div>
                            <div className="text-base cursor-pointer font-medium leading-6 group-hover:text-blue-500 transition-all duration-200">
                                Learn more &rarr;
                            </div>
                        </div>
                    </div>
                    </Link>
            </article>
        </li>
    )
}