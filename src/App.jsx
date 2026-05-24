import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./assets/global.css";
import data from "./data/advantages.js";
import Navbar from "./pages/navbar/Navbar.jsx";
import Hero from "./pages/hero/Hero.jsx";
import LinkShorter from "./pages/linkShorter/LinkShorter.jsx";
import AdvancedStatistics from "./pages/statistics/AdvancedStatistics.jsx";
import Boost from "./pages/boost/Boost.jsx";
import Footer from "./components/footer/Footer.jsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Navbar />
    <main>
      <Hero />
      <LinkShorter />
      <AdvancedStatistics />
      <Boost />
      <Footer />
    </main>
  </QueryClientProvider>
);
export default App;
