import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import Story from "@/components/Story";
import WorkSectionVideo from "@/components/WorkSectionVideo";
import Brands from "@/components/Brands";
import Portfolio from "@/components/Portfolio";
import OurWork from "@/components/OurWork";
import ShortForm from "@/components/ShortForm";
import OurOffering from "@/components/OurOffering";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-secondary selection:text-background">
      <Navbar />
      <Hero />
      {/* <Story /> */}
      <WorkSectionVideo />
      <Brands />
      <Portfolio />
      <OurWork />
      <ShortForm />
      <OurOffering />
      {/* <About /> */}
      <Contact />
      <Footer />
    </div>
  );
}
