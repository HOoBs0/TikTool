import { getTranslations } from "next-intl/server";

export default async function FeaturedIn({content}) {
    return (
        <div className="border-y border-b-gray-700 my-15 md:my-30 p-5">
            <h2 className="text-lg text-center text-white">{content.info}</h2>
        </div>
    )
}