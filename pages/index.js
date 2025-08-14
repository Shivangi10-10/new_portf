import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="skills">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  )
}