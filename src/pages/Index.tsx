import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import ServiceAreaSection from "@/components/ServiceAreaSection";
import ContactForm from "@/components/ContactForm";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import CookieBanner from "@/components/CookieBanner";

const Index = () => {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <ServiceAreaSection />
        <ContactForm />
        <FAQSection />
      </main>
      <FooterSection />
      <CookieBanner />
    </>
  );
};

export default Index;
