import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { fetchServices } from "../api/services";
import ServiceCard from "../components/ServiceCard";
import { Link } from "react-router-dom";

const MainService = () => {
  const scrollContainerRef = useRef(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    const load = async () => {
      try {
        const { data } = await fetchServices();
        if (isMounted) setServices(Array.isArray(data) ? data : data?.services || data?.data || []);
      } catch (err) {
        if (isMounted) setError(err?.response?.data?.message || "Failed to load services");
      } finally {
        if (isMounted) setLoading(false);
      }
    };
    load();
    return () => {
      isMounted = false;
    };
  }, []);

  const stats = [
    { number: "50+", label: "Services Offered", icon: Star },
    { number: "10K+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Years Experience", icon: Sparkles },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.8; // constant speed (pixels per frame)
    let animationId;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      scrollContainer.scrollLeft = scrollAmount;

      // Reset scroll when reaching the end
      if (
        scrollAmount >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollAmount = 0;
      }

      animationId = requestAnimationFrame(autoScroll);
    };

    // Start auto-scroll
    animationId = requestAnimationFrame(autoScroll);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Manual scroll functions
  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50/50 to-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Naye Soch Naya Kadam Section - At the very top */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="relative">
            {/* Background decorative element */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-blue-50/50 rounded-3xl blur-3xl"></div>

            <div className="relative z-10 glass-card max-w-5xl mx-auto p-8 sm:p-12 lg:p-16 border border-blue-200/30">
              {/* Icon and Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full px-6 py-2 mb-6">
                  <span className="text-2xl mr-3">💡</span>
                  <span className="font-bold text-sm uppercase tracking-wider">
                    Innovation
                  </span>
                </div>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-800 mb-6 leading-tight">
                <span className="block">Naye Soch</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-transparent bg-clip-text">
                  Naya Kadam
                </span>
              </h2>

              {/* Description */}
              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                Embracing{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-transparent bg-clip-text font-bold">
                  innovative thinking
                </span>{" "}
                and taking bold steps towards a brighter, more progressive
                future with cutting-edge solutions.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Innovation
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Cutting-edge solutions for modern challenges
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Progress
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Forward-thinking approach to growth
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <span className="text-white text-2xl">⭐</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">
                    Excellence
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Commitment to quality and innovation
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              {/* <div className="mt-8">
                <button className="group btn-primary flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold hover-lift mx-auto">
                  <span className="text-xl">💡</span>
                  Explore Innovation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="block">Services We</span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-transparent bg-clip-text">
              Deliver
            </span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-500 text-transparent bg-clip-text font-bold">
              comprehensive services
            </span>{" "}
            tailored to meet your every need with excellence and innovation.
          </p>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="flex flex-col items-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-500/25">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrollable Services Section */}
        <div className="relative mb-12 sm:mb-16 lg:mb-20">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 relative z-20">
              Our Services
            </h3>
            <div className="flex gap-2 relative z-20">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 group"
              >
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
              </button>
            </div>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitScrollbar: { display: "none" },
            }}
          >
            {error && (
              <div className="text-red-600">{error}</div>
            )}
            {loading
              ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex-none w-80 sm:w-96 h-56 bg-slate-100 animate-pulse rounded-2xl" />
              ))
              : ([...services, ...services].map((service, index) => (
                <div
                  key={`${service._id || index}-${index}`}
                  className="flex-none w-80 sm:w-96"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${(index % (services.length || 1)) * 100
                      }ms both`,
                  }}
                >
                  <ServiceCard
                    title={service.serviceName || service.title || "Service"}
                    description={service.details || service.description || ""}
                    icon={"🛠️"}
                    link={`/service-details/${service._id || service.id}`}
                    category={undefined}
                  />
                </div>
              )))}
          </div>

          {/* Gradient Overlays for scroll indication */}
          <div className="absolute left-0 top-16 bottom-0 w-20 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-16 bottom-0 w-20 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Call to Action Section */}
        <div className="text-center">
          <div className="glass-card max-w-4xl mx-auto p-8 sm:p-10 lg:p-12 border border-slate-200/50">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Let's discuss how our services can help transform your
                  business and achieve your goals.
                </p>
              </div>

              {/* CTA Buttons */}


              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto btn-primary flex items-center justify-center gap-3 px-6 sm:px-10 py-4 text-base sm:text-lg font-bold hover-lift"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Talk to a Consultant
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>

                <Link
                  to="/contact"
                  className="group w-full sm:w-auto btn-secondary flex items-center justify-center gap-3 px-6 sm:px-10 py-4 text-base sm:text-lg font-bold hover-lift"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Contact Us Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>



              {/* Contact Information */}
              <div className="pt-6 sm:pt-8 border-t border-slate-200/50">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>+91 7764026786</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-blue-600" />
                    <span>24/7 Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .glass-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: #3b82f6;
          color: #3b82f6;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        .hover-lift:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </section>
  );
};

export default MainService;