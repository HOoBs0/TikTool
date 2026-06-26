import { getMessages, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Footer({ params, currentLocale }) {
    //اللغات
    const { locale } = await params;
    const messages = await getMessages({ locale });
    const tfooter = await getTranslations({ locale, namespace: 'footer' })
    const footerLinks = await messages.footer.links;
    
    return (
        <footer className="text-neutral-content shadow-lg border-t border-t-gray-700 md:px-50">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 w-full py-10 text-center md:text-left">
                <div className="col-span-1 md:col-span-2">
                    <div className="text-xl flex items-center gap-1">
                        <img src="https://ik.imagekit.io/ctux3iaei/TikTool/logo.webp" alt="tiktool for download tiktok video without watermark online" className="w-10 h-10 m-auto md:m-0" />
                        <span className='font-bold text hidden lg:block'>Downloader</span>
                    </div>
                    <p className="text-neutral-400 mt-2 text-sm">{tfooter('description')}</p>
                    <div className="flex gap-2 mt-4 justify-center md:justify-start">
                        <a href="mailto:ehabgeorgesamy@gmail.com" className="text-neutral-400 bg-neutral-800 rounded-xl p-2 hover:text-white">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                        <a href="https://github.com/HOoBs0/TikTool" target="_blank" className="text-neutral-400 bg-neutral-800 rounded-xl p-2 hover:text-white">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>

                {footerLinks.map((i) => {
                    return (
                        <div key={i.heading}>
                            <h3 className="font-bold text-lg mb-2">{i.heading}</h3>
                            <ul className="text-neutral-400">
                                {
                                    i.list.map((o) => {
                                        return (
                                            <li key={o.title}><Link href={`/${currentLocale}/${o.href}`}>{o.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center text-center text-neutral-400 py-4 border-t border-t-gray-700">
                <p className="text-sm">&copy; {new Date().getFullYear()} Tok Downloader. {tfooter('developer')}</p>
                <p className="text-sm">{tfooter('message')}</p>
            </div>
        </footer>
    )
}
