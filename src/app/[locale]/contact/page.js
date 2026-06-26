import { getTranslations } from "next-intl/server";

export default async function Contact({ params }) {
    //اللغات
    const { locale } = await params;
    const tcontact = await getTranslations({ locale, namespace: 'contact' });
    
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 my-15 md:my-30 mx-5 md:mx-50">
            <div>
                <h1 className="text-4xl font-bold text-orange-400">{tcontact("title")}</h1>
                <p className="text-lg mt-4 text-white">{tcontact("description")}</p>
                <p className="text-md text-neutral-400">{tcontact("time")}</p>
                <ul className="space-y-2 mt-4">
                    <li>
                        <label htmlFor="email" className="text-neutral-400 block">{tcontact("email")}</label>
                        <a href="mailto:ehabgeorgesamy@gmail.com" className="text-xl text-white">ehabgeorgesamy@gmail.com</a>
                    </li>
                    <li>
                        <label htmlFor="phone" className="text-neutral-400 block">{tcontact("phone")}</label>
                        <a href="tel:+201097958700" className="text-xl text-white">+20 109 795 8700</a>
                    </li>
                    <li>
                        <label htmlFor="address" className="text-neutral-400 block">{tcontact("address")}</label>
                        <p className="text-xl text-white">El-Minya, Egypt</p>
                    </li>
                </ul>
            </div>
            <div className="bg-white rounded-3xl p-5 text-neutral-900 w-full">
                <form>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="name" className="label text-lg mb-1 font-semibold">
                                {tcontact("name_form")}
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="..."
                                className="input border-neutral-700 w-full rounded-3xl text-white bg-neutral-900 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="label text-lg mb-1 font-semibold">
                                {tcontact("email_form")}
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="..."
                                className="input border-neutral-700 w-full rounded-3xl text-white bg-neutral-900 focus:outline-none"
                            />
                        </div>
                    </div>

                    <div className="my-5">
                        <label htmlFor="message" className="label text-lg mb-1 font-semibold">
                            {tcontact("message_form")}
                        </label>
                        <textarea
                            id="message"
                            placeholder="..."
                            className="textarea border border-neutral-700 w-full rounded-2xl h-40 resize-none text-white bg-neutral-900 focus:outline-none"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-ghost bg-orange-400 border-0 join-item rounded-3xl text-white">
                            {tcontact("btn_form")}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}