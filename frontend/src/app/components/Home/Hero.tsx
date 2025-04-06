export default function Hero() {
    return (
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your Professional Presence</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Join thousands of professionals leveling up their digital impact with our platform.
        </p>
        <a
          href="#services"
          className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100"
        >
          Get Started
        </a>
      </section>
    );
  }