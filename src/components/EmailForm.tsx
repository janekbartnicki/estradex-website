const EmailForm: React.FC = () => {
    return (
        <section className="bg-gray-100" id="wiadomosc">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <div className="rajdhani-bold uppercase text-center text-2xl mb-10">Napisz do nas</div>
                    <form action="#" className="space-y-4">
                    <div>
                        <label className="sr-only" htmlFor="name">Imię / Nazwa Firmy</label>
                        <input
                        className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                        placeholder="Imię / Nazwa firmy"
                        type="text"
                        id="name"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <input
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Email address"
                            type="email"
                            id="email"
                        />
                        </div>

                        <div>
                        <label className="sr-only" htmlFor="phone">Numer Telefonu</label>
                        <input
                            className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                            placeholder="Numer Telefonu"
                            type="tel"
                            id="phone"
                        />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="message"></label>

                        <textarea
                        className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                        placeholder="Wiadomość"
                        rows={8}
                        id="message"
                        ></textarea>
                    </div>

                    <div className="mt-4 text-right">
                        <button
                        type="submit"
                        className="inline-block w-full rounded-lg bg-estradex-blue px-5 py-3 font-medium text-white sm:w-auto"
                        >
                            Wyślij wiadomość
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default EmailForm;