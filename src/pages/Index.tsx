import { useState, useEffect } from "react";
import WelcomeAnimation from "@/components/WelcomeAnimation";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SignatureDishes from "@/components/SignatureDishes";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import TableBooking from "@/components/TableBooking";
import VisitUs from "@/components/VisitUs";
import RestaurantFooter from "@/components/RestaurantFooter";

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("milagu_welcomed");
    if (!hasVisited) {
      setShowWelcome(true);
    } else {
      setReady(true);
    }
  }, []);

  const handleWelcomeComplete = () => {
    sessionStorage.setItem("milagu_welcomed", "true");
    setShowWelcome(false);
    setReady(true);
  };

  return (
    <>
      {showWelcome && <WelcomeAnimation onComplete={handleWelcomeComplete} />}
      {ready && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SignatureDishes />
            <MenuSection />
            <GallerySection />
            <TableBooking />
            <VisitUs />
          </main>
          <RestaurantFooter />
        </>
      )}
    </>
  );
};

export default Index;
