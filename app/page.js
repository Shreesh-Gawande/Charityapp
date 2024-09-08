import Header from "./_components/Header.jsx";
import Hero from "./_components/Hero";
import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
     <Header/>
        <Hero/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Footer/>
    </div>
  );
}
