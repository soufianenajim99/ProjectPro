import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { TimelineHome } from "@/components/ui/TimelineHome";

const HomePage = () => {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <Hero />
      <TimelineHome />
      <Footer />
    </div>
  );
};

export default HomePage;
