import Hero from "./components/Home/Hero";
import AboutSection from "./components/Home/AbooutSection";
import ServiceCard from "./components/Home/ServiceCard";
import ServiceOverview from "./components/Home/ServicesOverview";
import SocialProof from "./components/Home/SocialProof";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
   
       
      <Hero/>
      <AboutSection/>
      <ServiceCard/>
      <ServiceOverview/>
      <SocialProof/>
      
    </div>
  );
}
