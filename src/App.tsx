import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
