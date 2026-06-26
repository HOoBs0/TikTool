import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "next-intl/server";

export default async function Navbar({ params, currentLocale }) {
    //اللغات
    const { locale } = await params;
    const tnav = await getTranslations({ locale, namespace: 'navbar' });
    
    return (
        <div className="navbar text-neutral-content shadow-lg border-b border-b-gray-700 md:px-50">
            <div className="flex-1">
                <Link href={`/${currentLocale}`} className="text-xl flex items-center gap-1">
                    <img src="https://ik.imagekit.io/ctux3iaei/TikTool/logo.webp" alt="tiktool for download tiktok video without watermark online" className="w-10 h-10" />
                    <span className='font-bold text hidden lg:block'>Tik Tool</span>
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal flex items-center gap-1 md:gap-4">
                    <li className='text-neutral-400'><Link href={`/${currentLocale}`}>{tnav('home')}</Link></li>
                    <li className='text-neutral-400'><Link href={`/${currentLocale}` + '/tiktok-app'}>{tnav('tiktok')}</Link></li>
                    <li className='text-neutral-400'><Link href={`/${currentLocale}` + '/contact'}>{tnav('contact')}</Link></li>
                    <li className='text-neutral-400'><Link href={`/${currentLocale}` + '/about'}>{tnav('about')}</Link></li>
                    <li>
                        <LanguageSwitcher />
                    </li>
                </ul>
            </div>
        </div>
    );
}