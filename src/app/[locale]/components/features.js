export default function Features({ content }) {
    return (
        <div className="my-15 md:my-30 mx-5 md:mx-50">
            <h2 className="text-4xl font-bold text-center text-white">{content.title}</h2>
            <p className="text-lg mt-4 text-center text-neutral-400">{content.description}</p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 text-center">
                {
                    content.list.map((i) => {
                        return (
                            <div key={i.title} className="border border-neutral-700 bg-neutral-900 rounded-2xl p-5 justify-items-center">
                                <img src={i.img} alt={i.title + ` , ${i.description}`} className="w-30 my-5 mx-auto" />
                                <h3 className="text-lg font-bold text-white">{i.title}</h3>
                                <p className="text-neutral-400 mt-2">{i.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}