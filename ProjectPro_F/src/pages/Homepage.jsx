import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { TimelineHome } from "@/components/ui/TimelineHome";

const HomePage = () => {
  return (
    <div className="bg-gray-50">
      <div className="container ">
        {/* <Navbar /> */}
        <Hero />
        <TimelineHome />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
