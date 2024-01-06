import HeroSection from "../components/HeroSection"
import Navbar from "../components/Navbar"
import AboutSection from "../components/AboutSection"
import ProjectsSection from "../components/ProjectsSection"
import EmailSection from "@/components/EmailSection"
import FooterSection from "@/components/FooterSection"
import Image from "next/image"

// https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg


export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col bg-[#121212] "   >


      <section className="bg-white md-24 mx-contain px-20 bg-cover bg-fixed" style={{
        backgroundImage:
        "url(https://wallpapersmug.com/u/26479e/moonrise-minimal-blue-clouds-fantasy-art.jpg)",
      }}>

            <Navbar />
          <HeroSection /> 
      </section>

      <section className="container md-24 mx-auto px-12" >

        <AboutSection /> 
        
        <ProjectsSection />
        <EmailSection />
      </section>
      <section >
        <FooterSection />
      </section>
    </main>
  )
}
 