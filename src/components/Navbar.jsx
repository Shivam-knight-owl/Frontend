import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div className="bg-stone-700 text-white">
            <header className="p-4 flex justify-between items-center">
                <Link to="/">
                    <div className="flex">
                        <div className="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-2xl font-didot">Constitution Sphere</h1>
                        </div>
                    </div>
                </Link>

                <nav>
                    <ul className="flex space-x-4">
                        <li className="cursor-pointer hover:text-amber-600 font-semibold text-lg">Home</li>
                        <li className="cursor-pointer hover:text-amber-600 font-semibold text-lg">Game</li>
                        <li className="cursor-pointer hover:text-amber-600 font-semibold text-lg">Quiz</li>
                        <li className="cursor-pointer hover:text-amber-600 font-semibold text-lg">Constitution</li>
                        <li className="cursor-pointer hover:text-amber-600 font-semibold text-lg">Timeline</li>
                        <li className="cursor-pointer hover:text-amber-600 font-semibold text-lg"><Link to="/user/chatbot">Chatbot</Link></li>
                    </ul>
                </nav>
                <button className="bg-amber-700 text-white px-4 py-2 rounded hover:bg-amber-600">Get Started</button>
            </header>
        </div>
    )
}