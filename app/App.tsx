import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Features from "./components/Features";
import Walkthrough from "./components/Walkthrough";
import MarketMap from "./components/MarketMap";
import HowItWorks from "./components/HowItWorks";
import Metrics from "./components/Metrics";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const SHOW_TRUST_STRIP = false;
const SHOW_METRICS = false;
const SHOW_TESTIMONIALS = false;

function App() {
  return (
    <div className="r-app">
      <Hero />
      {SHOW_TRUST_STRIP && <TrustStrip />}
      <Features />
      <Walkthrough />
      <MarketMap />
      <HowItWorks />
      {SHOW_METRICS && <Metrics />}
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
