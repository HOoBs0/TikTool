import { getTranslations } from "next-intl/server";

export default async function TikTokApp({params}) {
    //اللغات
    const { locale } = await params;
    const tapp = await getTranslations({ locale, namespace: 'tiktok' });

    return (
        <div className="my-15 md:my-30 mx-5 md:mx-50">
            <h1 className="text-4xl font-bold text-center text-white">{tapp('title')}</h1>
            <p className="text-lg mt-4 text-center text-neutral-400">{tapp('description')}</p>
            <img src="https://ik.imagekit.io/ctux3iaei/TikTool/tiktok_desktop.webp?updatedAt=1782418245710" alt="download tikTok for desktop free" className="w-50 h-50 mx-auto my-15" />
            <div className="flex flex-col w-fit gap-5 mx-auto mt-5">
                <a target="blank" href="https://apps.microsoft.com/detail/9nh2gph4jzs4?hl=en-GB&gl=ZA" className="btn btn-ghost text-xl p-7 bg-orange-400 border-0 rounded-xl text-white">{tapp('windows')} <i className="fa-brands fa-microsoft"></i></a>
                <a target="blank" href="https://apps.apple.com/us/app/tiktok-videos-shop-live/id835599320" className="btn btn-ghost text-xl p-7 bg-orange-400 border-0 rounded-xl text-white">{tapp('mac')} <i className="fa-brands fa-apple"></i></a>
            </div>
        </div>
    )
}