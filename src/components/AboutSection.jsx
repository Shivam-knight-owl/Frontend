
export function AboutSection() {
    return (
        <div className="bg-customBeige p-8 max-w-3xl mx-auto">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-600 mb-2">About Constitution Explorer
                </h3>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Empowering Citizens Through Education</h2>
                <p className="text-gray-700 text-lg max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our mission is to make the Indian Constitution accessible and engaging for all citizens. Through interactive features and gamified learning, we aim to foster a deeper understanding and appreciation of our fundamental rights and democratic principles.
                </p>
            </div>
            <div className="flex space-x-4">
                <button className="bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition duration-300 font-semibold">
                    Contact Us
                </button>
                <button className="bg-white text-black px-6 py-3 rounded-md border border-amber-700 hover:bg-stone-700 hover:text-white transition duration-300 font-semibold">
                    Explore Features
                </button>
            </div>
        </div>
    )
}