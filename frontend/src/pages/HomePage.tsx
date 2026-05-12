import Navbar from "../components/layout/Navbar"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import ServicesSection from "../components/sections/ServicesSection"
import MinistriesSection from "../components/sections/MinistriesSection"
import Footer from "../components/layout/Footer"

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <MinistriesSection />
            <Footer />
        </>
    )
}

export default HomePage