const services = [
    {
      title: "Threat Detection & Response",
      description: "Monitor, identify, and neutralize cyber threats in real-time with our advanced security operations.",
    },
    {
      title: "Vulnerability Assessment",
      description: "Identify and patch security loopholes before attackers exploit them.",
    },
    {
      title: "Compliance & Risk Management",
      description: "Stay compliant with industry standards and manage risks with expert guidance and tools.",
    },
  ];
  
  export default function ServiceCard() {
    return (
      <section id="services" className="py-16 px-4 bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-bold text-center mb-10">Our Cybersecurity Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }