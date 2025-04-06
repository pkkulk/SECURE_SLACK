export default function SocialProof() {
    return (
      <section className="py-16 px-4 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">Trusted by 10,000+ Professionals</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Don’t just take our word for it. Hear what our users have to say.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <blockquote className="bg-white p-6 rounded-xl shadow text-left max-w-sm mx-auto">
            <p className="mb-2">“This platform transformed my freelance business.”</p>
            <footer className="text-sm text-gray-600">— Alex, Designer</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow text-left max-w-sm mx-auto">
            <p className="mb-2">“A one-stop place to show off my skills to clients.”</p>
            <footer className="text-sm text-gray-600">— Priya, Developer</footer>
          </blockquote>
        </div>
      </section>
    );
  }