import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchServices } from "../api/services";
import ServiceCard from "../components/ServiceCard";

// Ensure motion is referenced for certain linters
void motion;

const Service = () => {
  const navigate = useNavigate();

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

  // Framer Motion Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
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
        {/* Header Section */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center bg-blue-50/80 backdrop-blur-sm border border-blue-200/50 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-semibold text-blue-700">
              Comprehensive Solutions
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-4 sm:mb-6 leading-tight">
            <span className="block">Services We</span>
            <span className="block text-gradient">Deliver</span>
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
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center group"
              >
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
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        {error && (
          <div className="text-center text-red-600 mb-6">{error}</div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {loading ? (
            Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="h-56 bg-slate-100 animate-pulse rounded-2xl" />
            ))
          ) : (
            services.map((service, index) => (
              <motion.div
                key={service._id || index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <ServiceCard
                  title={service.serviceName || service.title || "Service"}
                  description={service.details || service.description || ""}
                  icon={"🛠️"}
                  link={`/service-details/${service._id || service.id}`}
                  category={undefined}
                />
              </motion.div>
            ))
          )}
        </div>

        {/* Call to Action Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
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
                <motion.button
                onClick={() => navigate("/contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto btn-primary flex items-center justify-center gap-3 px-6 sm:px-10 py-4 text-base sm:text-lg font-bold hover-lift"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  Talk to a Consultant
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  onClick={() => navigate("/contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto btn-secondary flex items-center justify-center gap-3 px-6 sm:px-10 py-4 text-base sm:text-lg font-bold hover-lift"
                >
                  <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Contact Us Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
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
        </motion.div>
      </div>
    </section>
  );
};

export default Service;