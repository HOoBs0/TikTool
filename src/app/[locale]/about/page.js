import { getTranslations } from "next-intl/server";

export default async function Contact({ params }) {
    //اللغات
    const { locale } = await params;
    const tabout = await getTranslations({ locale, namespace: 'about' });
    
    return (
        <div className="my-15 md:my-30 mx-5 md:mx-50">
            <h1 className="text-4xl font-bold text-orange-400">{tabout('title')}</h1>
            <p className="text-md mb-4 text-neutral-400">{tabout('me')}</p>
            <p className="text-xl text-white">
                {tabout('description')}
            </p>
        </div>
    );
}