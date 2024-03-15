import AboutUs from "../components/layout/AboutUs";
import ContactUs from "../components/layout/ContactUs";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeader from "../components/layout/SectionHeader";

export default function Home() {
  return (
    <>

      <Hero/>
      <HomeMenu/>
      <AboutUs />
      <ContactUs />
      
    </>
  );
}
