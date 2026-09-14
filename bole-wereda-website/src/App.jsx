import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Gallery from './components/Gallery/Gallery.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App