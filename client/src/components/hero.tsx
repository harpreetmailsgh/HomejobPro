import { useState, useEffect } from "react";
import SearchBar from "./search-bar";

const services = ['Plumber', 'Electrician', 'HVAC Technician', 'Landscaper', 'Home Services'];

export default function Hero() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        setIsVisible(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-grey to-blue-grey-800 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up">
          I am looking for{' '}
          <span 
            className={`rotating-text text-orange-primary transition-opacity duration-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            data-testid="rotating-service"
          >
            {services[currentServiceIndex]}
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-blue-grey-100 animate-fade-in-up">
          Find trusted professionals for all your home service needs
        </p>
        
        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
