import React from 'react';
import { Gavel } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import statue from '../assets/justice-statue.png';
import QuizSection from '../components/QuizSection';
import { Link } from 'react-router-dom';
import { AboutSection } from '../components/AboutSection';
import constitution from '../assets/constitution.jpg';

const Landing = () => {

  const constitutionParts = [
    {
      title: "Preamble",
      description: "The Preamble is the introduction to the Constitution and outlines the key principles and values that the Constitution aims to uphold.",
    },
    {
      title: "Fundamental Rights",
      description: "The Fundamental Rights are a set of rights guaranteed to all citizens of India, ensuring their basic freedoms and protections.",
    },
    {
      title: "Directive Principles",
      description: "The Directive Principles of State Policy are guidelines for the government to follow in order to promote the welfare of the people.",
    },
    {
      title: "Amendments",
      description: "The Constitution can be amended through a specific procedure, allowing it to evolve and adapt to changing times and needs.",
    },
    {
      title: "Judiciary",
      description: "The Judiciary, comprising the Supreme Court and High Courts, plays a crucial role in interpreting and upholding the Constitution.",
    },
    {
      title: "Union and States",
      description: "The Constitution defines the relationship between the Union government and the state governments, outlining their respective powers and responsibilities.",
    },
  ];

  return (
    <div className="bg-customBeige text-stone-800">
      <Navbar/>
      <main className="container mx-auto px-4">
        <section className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="ml-16 flex flex-col justify-center">
              <h2 className="text-5xl font-didot mb-8 font-medium">EXPLORE THE INDIAN CONSTITUTION</h2>
              <p className="text-gray-700 mb-8 text-xl font-didot">
                Dive into the fascinating world of the Indian Constitution and learn about its
                history, structure, and key provisions in an engaging and interactive way.
              </p>
              <button className="bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-600 transition duration-300 w-40">
                Start Exploring
              </button>
            </div>
            <div className="flex justify-center items-center mb-16">
              <img src={statue} alt="Lady Justice Statue" className="w-96" />
            </div>
          </div>
        </section>

        <section className="bg-customBeige rounded-lg shadow-xl p-8 mb-16">
          <div className="md:flex items-center">
            <div className="md:w-1/2 pr-8">
              <QuizSection/>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <div className="bg-customComplement h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-6xl">🏆</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-customBeige rounded-lg shadow-2xl p-8 mb-8">
          <div className='flex flex-col justify-center items-center'>
            <h2 className="text-4xl font-bold mb-4">Discover the Constitution</h2>
            <p className="text-gray-700 mb-6 text-xl">
              Explore the different parts of the Indian Constitution and learn about their significance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {constitutionParts.map((part, index) => (
              <div key={index} className="bg-customBeige border border-amber-700 p-6 rounded-lg shadow-md
                       transition-all duration-300 ease-in-out
                       hover:bg-customComplement hover:scale-105 hover:shadow-xl
                       hover:z-10 relative">
                <h3 className="text-xl font-semibold mb-2">{part.title}</h3>
                <p className="text-gray-700 mb-4">{part.description}</p>
                <a href="#" className="text-amber-600 font-semibold hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-customBeige rounded-lg shadow-xl p-8 mb-16">
          <div className="md:flex items-center">
            <div className="md:w-1/2 pr-8">
              <AboutSection/>
            </div>
           
            <div className=" w-[50%] rounded-lg flex items-center justify-center">
              <img src={constitution} alt="" height={64} width={64} className='object-fit w-64'/>
            </div>
            
          </div>
        </section>
       
      </main>
      
      <footer className="bg-stone-700 text-white p-4 text-center">
        <p>&copy; 2024 Constitution Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;