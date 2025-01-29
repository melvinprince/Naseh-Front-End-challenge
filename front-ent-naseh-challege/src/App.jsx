import Blog from "./components/Blog";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import LawFirmList from "./components/LawFirmList";
import LegalServiceTypes from "./components/LegalServiceTypes";
import Newsletter from "./components/Newsletter";
import WhyChoose from "./components/WhyChoose";

export default function App() {
  return (
    <main className="main">
      <Header />
      <Introduction />
      <Features />
      <LegalServiceTypes />
      <LawFirmList />
      <CTA />
      <Blog />
      <FAQ />
      <WhyChoose />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
