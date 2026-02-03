import { motion } from "framer-motion";
import {
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <motion.div
          className="absolute top-20 left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="container mx-auto">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Company Info */}
            <motion.div
              className="lg:col-span-1 space-y-6"
              variants={fadeInUp}
              custom={1}
            >
              {/* Removed logo image */}

              <div className="space-y-4">
                <motion.div
                  className="flex items-start gap-3 group"
                  variants={fadeInUp}
                  custom={2}
                >
                  <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                  <p className="text-slate-300 text-sm leading-relaxed">
                    NAYA TOLA TINPULIYA (GANESHPUR), P.O.- KHIRIBANDH, P.S.- BY
                    PASS, DIST.- BHAGALPUR (BIHAR) INDIA
                  </p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  variants={fadeInUp}
                  custom={3}
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a
                    href="mailto:nayesochnayakadam@gmail.com"
                    className="text-slate-300 text-sm"
                  >
                    nayesochnayakadam@gmail.com
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 group cursor-pointer"
                  variants={fadeInUp}
                  custom={4}
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <a
                    href="tel:7764026786"
                    className="text-slate-300 text-sm font-semibold"
                  >
                    (+91) 7764026786
                  </a>
                </motion.div>

                <motion.div
                  className="flex items-center gap-3 group"
                  variants={fadeInUp}
                  custom={5}
                >
                  <ExternalLink className="w-4 h-4 text-blue-400" />
                  <a
                    href="https://nayesochnayakadam.com"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    Nayesochnayakadam.com
                  </a>
                </motion.div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div className="space-y-6" variants={fadeInUp} custom={2}>
              <h4 className="text-xl font-bold text-white relative">
                Our Services
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[
                  {
                    name: "Dhanganga Online Public Kendra",
                    href: "/discover-Public-Kendra",
                  },
                  {
                    name: "Dhanganga Associate",
                    href: "/MainService",
                  },
                  {
                    name: "Dhanganga Physical Treatment Home",
                    href: "/MainService",
                  },
                  {
                    name: "Dhanganga Store",
                    href: "/MainServicee",
                  },
                  {
                    name: "Dhanganga Real Estate",
                    href: "/MainService",
                  },
                  {
                    name: "Dhanganga Hire Services",
                    href: "/MainService",
                  },
                  {
                    name: "Dhanganga Hire Vehicle",
                    href: "/MainService",
                  },
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    custom={index + 3}
                    whileHover={{ x: 6 }}
                  >
                    <a
                      href={service.href}
                      className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
                    >
                      <div className="w-2 h-2 bg-blue-400/50 rounded-full"></div>
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

            </motion.div>

            {/* Quick Links */}
            <motion.div className="space-y-6" variants={fadeInUp} custom={3}>
              <h4 className="text-xl font-bold text-white relative">
                Quick Links
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full"></div>
              </h4>
             <ul className="space-y-3">
  {[
    { name: "Book Services", href: "/contact" },
    { name: "Terms of Payment", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ].map((link, index) => (
    <motion.li
      key={index}
      variants={fadeInUp}
      custom={index + 4}
      whileHover={{ x: 6 }}
    >
      <a
        href={link.href}
        className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
      >
        <div className="w-2 h-2 bg-emerald-400/50 rounded-full"></div>
        {link.name}
      </a>
    </motion.li>
  ))}
</ul>

            </motion.div>

            {/* Support & App */}
            <motion.div className="space-y-6" variants={fadeInUp} custom={4}>
              <h4 className="text-xl font-bold text-white relative">
                Support
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              </h4>
              <ul className="space-y-3">
                {[

                  { name: "Help & FAQ", href: "/contact" },
                  { name: "Contact Us", href: "/contact" },
                ].map((support, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    custom={index + 5}
                    whileHover={{ x: 6 }}
                  >
                    <a
                      href={support.href}
                      className="flex items-center gap-2 text-slate-300 hover:text-white text-sm"
                    >
                      <div className="w-2 h-2 bg-purple-400/50 rounded-full"></div>
                      {support.name}
                    </a>
                  </motion.li>
                ))}
              </ul>


              {/* App Download
              <div className="pt-4">
                <p className="text-sm text-slate-400 mb-3 font-medium">
                  Download Our App
                </p>
                <motion.img
                  src="https://nayesochnayakadam.com/assets/images/icons/aeroland-button-google-play.webp"
                  alt="Get it on Google Play"
                  className="h-12 rounded-lg shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div> */}
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="border-t border-white/10 mt-12 pt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            custom={6}
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-slate-400">
                © 2021{" "}
                <span className="text-white font-semibold">
                  Dhanganga Associate
                </span>
                . All Rights Reserved.
              </p>

              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <p className="text-sm text-slate-400 hidden sm:block">
                  Follow us:
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Twitter,
                      label: "Twitter",
                      color: "hover:text-sky-400",
                    },
                    {
                      icon: Facebook,
                      label: "Facebook",
                      color: "hover:text-blue-500",
                    },
                    {
                      icon: Instagram,
                      label: "Instagram",
                      color: "hover:text-pink-400",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      color: "hover:text-blue-400",
                    },
                  ].map(({ icon: Icon, label, color }, i) => (
                    <motion.a
                      key={label}
                      href="#"
                      className={`group relative p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-slate-400 ${color}`}
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      whileTap={{ scale: 0.9 }}
                      variants={fadeInUp}
                      custom={i + 7}
                      aria-label={label}
                    >
                      <Icon size={18} />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100"></div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </footer>
  );
};

export default Footer;