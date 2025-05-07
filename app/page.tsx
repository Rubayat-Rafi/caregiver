import About from "./components/About";
import Apart from "./components/Apart";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Banner />
      <About />
      <Services />
      <Apart />
      <Team />
      <Testimonials />
      <Contact />
      <Footer/>
    </main>
  );
}
