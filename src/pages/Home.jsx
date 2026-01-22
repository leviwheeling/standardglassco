import Hero from '../components/Hero'
import ServicesSection from '../components/Services'
import Process from '../components/Process'
import ProjectsGrid from '../components/ProjectsGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <Process />
      <ProjectsGrid />
      <WhyChooseUs />
      <Testimonials />
    </main>
  )
}
