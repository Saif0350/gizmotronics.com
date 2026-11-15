import HomeAboutSection from "@/components/AboutUs/AboutUs";
import ContactSection from "@/components/ContactSection";
import Banner from "@/components/Hero/Banner";
import ParallaxScrollSection from "@/components/Hero/ParallaxScrollSection";
import Services from "@/components/Services/Services";
import WeBuyPhones from "@/components/WeBuyPhones";
import WeSellPhonesSection from "@/components/WeSellPhones";

export default function Home() {
  return (
    <main className="relative w-full">
      <ParallaxScrollSection />
      <Banner />
      <HomeAboutSection />
      <div id="services-section" className="hidden z-[10] lg:block" key={1}>
        <Services />
      </div>
      <WeBuyPhones />
      <WeSellPhonesSection />
      <ContactSection />
    </main>
  );
}
