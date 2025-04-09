export default function ServicesPage() {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4 text-white">Our Services</h1>
        <p className="text-lg text-white mb-6">
          We offer cutting-edge cybersecurity solutions to protect your digital assets and infrastructure.
        </p>
  
        <ul className="space-y-4">
          <li className="border p-4 text-white border-white rounded shadow hover:shadow-lg hover:shadow-white transition ">
            🔐 Penetration Testing – Identify vulnerabilities before attackers do.
          </li>
          <li className="border p-4 text-white border-white rounded shadow hover:shadow-lg hover:shadow-white transition">
            🛡️ Firewall & Network Security – Keep threats out with robust defenses.
          </li>
          <li className="border p-4 text-white border-white rounded shadow hover:shadow-lg hover:shadow-white transition">
            👨‍🏫 Security Training – Equip your team with security best practices.
          </li>
          <li className="border p-4 text-white border-white rounded shadow hover:shadow-lg hover:shadow-white transition">
            📊 Risk Assessment & Compliance – Stay aligned with industry standards.
          </li>
        </ul>
      </div>
    );
  }
  