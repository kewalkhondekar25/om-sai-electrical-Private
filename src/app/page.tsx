import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import About from '../components/About'
import FeaturedProjects from '../components/FeaturedProjects'
import Industries from '../components/Industries'
import Strengths from '../components/Strengths'
import CTASection from '../components/CTASection'
import Footer from '../components/Footer'
import ScrollAnimations from '../components/ScrollAnimations'

export default function Page() {
  return (
    <>
      <ScrollAnimations />
      <Navbar activePage="home" />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <div className="section-divider" />
        <FeaturedProjects />
        <div className="section-divider" />
        <Industries />
        <div className="section-divider" />
        <Strengths />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
