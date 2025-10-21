import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Expertise from './components/Expertise'
import Featured from './components/Featured'
import WhyStyleSync from './components/WhyStyleSync'
import Team from './components/Team'  
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <HowItWorks />
      <Expertise />
      <Featured />
      <WhyStyleSync />
      <Team />  
      <Pricing />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App