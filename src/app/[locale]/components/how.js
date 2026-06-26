export default function How({ content }) {
    return (
        <div className="my-15 md:my-30 mx-5 md:mx-50">
            <h2 className="text-4xl font-bold text-center text-white">{content.title}</h2>
            <p className="text-lg mt-4 text-center text-neutral-400">{content.description}</p>
            <ul className="grid grid-cols-1 gap-5 mt-10">
                {
                    content.list.map((i) => {
                        return (
                            <li key={i.info} className="border border-neutral-700 bg-neutral-900 rounded-2xl p-5">
                                <p className="text-white font-bold">{i.info}</p>
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}