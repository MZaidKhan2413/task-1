import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/ServiceSection/Service";
import Technology from "./components/Technology/Technology";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <main>
     <Navbar />
      <Hero />
      <About />
      <Service />
      <Technology />
      <Contact />
    </main>
  )
}

export default App
