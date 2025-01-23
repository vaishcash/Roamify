import Image from "next/image";
import {
  BookingSection,
  CardsSection,
  Features,
  Footer,
  Header,
 
  Navigation,
  Popup,
  StoriesSection,
} from "./_component";
import MapSection from "./map/page";
import TripPlans from "./tripPlans/page";

export default function Home() {
  return (
    <>
      <Popup />
      <Navigation />
      <Header />
      <MapSection />

      <Features />
      <TripPlans />
      <CardsSection />
      <StoriesSection />
      <BookingSection />
      <Footer />
    </>
  );
}
