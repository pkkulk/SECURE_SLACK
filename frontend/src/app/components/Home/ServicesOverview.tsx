export default function ServiceOverview() {
    return (
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-6">
            Our cybersecurity platform delivers enterprise-grade security tailored for organizations of all sizes. We combine cutting-edge technology with expert insights to defend against evolving threats.
          </p>
          <ul className="text-left max-w-2xl mx-auto space-y-3">
            <li>✅ 24/7 threat monitoring and incident response</li>
            <li>✅ AI-driven vulnerability scanning and remediation</li>
            <li>✅ Compliance with ISO, GDPR, HIPAA, and more</li>
            <li>✅ Scalable solutions for startups to enterprises</li>
          </ul>
        </div>
      </section>
    );
  }