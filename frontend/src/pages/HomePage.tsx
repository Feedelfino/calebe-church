import Navbar from "../components/layout/Navbar"
import HeroSection from "../components/sections/HeroSection"
import AboutSection from "../components/sections/AboutSection"
import ServicesSection from "../components/sections/ServicesSection"

function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <AboutSection />
        <ServicesSection />
        </>
    )
}

export default HomePage