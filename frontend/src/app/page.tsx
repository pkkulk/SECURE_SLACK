import Hero from "./components/Home/Hero";
import AboutSection from "./components/Home/AbooutSection";
import ServiceCard from "./components/Home/ServiceCard";
import ServiceOverview from "./components/Home/ServicesOverview";
import SocialProof from "./components/Home/SocialProof";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
   
      <main className="flex-grow p-6">
        <h1 className="text-2xl font-bold text-green-700">Welcome to the Page!</h1>
      <Hero/>
      <AboutSection/>
      <ServiceCard/>
      <ServiceOverview/>
      <SocialProof/>
      </main>
    </div>
  );
}
