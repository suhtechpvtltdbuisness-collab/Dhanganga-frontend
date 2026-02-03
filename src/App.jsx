import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Discover from "./pages/Discover";
import DiscoverAssociate from "./pages/DiscoverAssociate";
import DiscoverHire from "./pages/DiscoverHire";
import DiscoverPhysical from "./pages/DiscoverPhysical";
import DiscoverRealEstate from "./pages/DiscoverRealEstate";
import DiscoverStore from "./pages/DiscoverStore";
import Experts from "./pages/Expert";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Information from "./pages/Information";
import JoinUs from "./pages/JoinUs";
import DiscoverPublicKendra from "./pages/LearnMore";
import MainService from "./pages/MainServices";
import Navbar from "./pages/Navbar";
import News from "./pages/News";
import Offer from "./pages/Offer";
import Service from "./pages/Services";

// ✅ newly added pages
import { useEffect } from "react";
import MovingBanner from "./components/MovingBanner.jsx";
import AppointmentBooking from "./pages/AppointmentBooking.jsx";
import BookingModal from "./pages/AppointmentForm";
import DiscoverHealing from "./pages/DiscoverHealing.jsx";
import DiscoverNayeSoch from "./pages/DiscoverNayeSoch.jsx";
import DiscoverNetralay from "./pages/DiscoverNetralay.jsx";
import DiscoverVehicle from "./pages/DiscoverVehicle.jsx";
import MainAppoinment from "./pages/MainAppoinment.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ServiceDetails from "./pages/ServiceDetails";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // change to "auto" for instant scroll
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="relative">
        <ScrollToTop />
        {/* Navbar fixed top */}
        <Navbar />

        {/* Page wrapper with top padding for fixed Navbar */}
        <main className="pt-32 sm:pt-36 lg:pt-40">
          <Routes>
            {/* ✅ Home Page */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  {/* <MovingBanner text="तेरा  सपना  सच  हो" speed={20} /> */}
                  <Service />
                  <Discover />
                  {/* <MovingBanner text="तेरा  सपना  सच  हो" speed={20} /> */}
                  <Experts />
                  <Information />
                </>
              }
            />

            {/* About Page */}
            <Route path="/about" element={<About />} />

            {/* Join Us / Membership Page */}
            <Route path="/join-us" element={<JoinUs />} />

            {/* Appointment Page */}
            <Route path="/appoinment" element={<MainAppoinment />} />

            {/* News Page */}
            <Route path="/news" element={<News />} />

            {/* Offer Page */}
            <Route path="/offer" element={<Offer />} />

            {/* Contact Page */}
            <Route path="/contact" element={<Contact />} />

            {/* Main Service page */}
            <Route path="/MainService" element={<MainService />} />

            {/* Discover Public Kendra Page */}
            <Route
              path="/discover-Public-Kendra"
              element={<DiscoverPublicKendra />}
            />

            {/* Discover Association Page */}
            <Route
              path="/discover-Association"
              element={<DiscoverAssociate />}
            />

            {/* Discover Physical Page */}
            <Route path="/discover-Physical" element={<DiscoverPhysical />} />

            {/* Discover Store */}
            <Route path="/discover-Store" element={<DiscoverStore />} />

            {/* Discover Real Estate Page */}
            <Route
              path="/discover-RealEstate"
              element={<DiscoverRealEstate />}
            />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Discover Hire Page */}
            <Route path="/discover-Hire" element={<DiscoverHire />} />
            <Route path="/discover-Vehicle" element={<DiscoverVehicle />} />
            <Route path="/discover-NayeSoch" element={<DiscoverNayeSoch />} />
            <Route path="/discover-Netralay" element={<DiscoverNetralay />} />
            <Route path="/discover-Healing" element={<DiscoverHealing />} />

            {/* Booking / Service details pages */}
            <Route path="/booking" element={<BookingModal />} />
            <Route path="/service-details/:id" element={<ServiceDetails />} />
            <Route
              path="/appointment-booking"
              element={<AppointmentBooking />}
            />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>

        {/* Footer (common on all pages) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;