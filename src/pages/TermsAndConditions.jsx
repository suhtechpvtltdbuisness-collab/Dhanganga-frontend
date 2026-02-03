import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TermsAndConditions = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Terms of Service
        </motion.h1>

        <motion.p
          className="text-slate-600 mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          These Terms of Service (“Terms”) govern your access to and use of{" "}
          <strong> nayesochnayakadam.com </strong>, including all websites,
          applications, platforms, services, and products that link to or
          reference these Terms (collectively, the “Website” or “Services”).
        </motion.p>

        <div className="space-y-8 text-slate-700">
          <section>
            <p>
              The Services are operated under <strong>Dhanganga Online Public Kendra</strong>,{" "}
              <strong>Dhanganga Associate</strong>, <strong>Dhanganga Physical Treatment Home</strong>,{" "}
              <strong>Dhanganga Store</strong>, <strong>Dhanganga Real Estate</strong>,{" "}
              <strong>Dhanganga Hire Services</strong>, and{" "}
              <strong>Dhanganga Hire Vehicle</strong> (collectively referred to as
              “Dhanganga,” “we,” “us,” or “our”).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing, browsing, or using the Website or Services, you
              acknowledge that you have read, understood, and agree to be legally
              bound by these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Lawful Use</h2>
            <p>
              You agree to use the Website and Services only for lawful purposes
              and in compliance with all applicable local, state, and national
              laws and regulations of India.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. User Responsibility</h2>
            <p>
              You are solely responsible for ensuring that any information
              provided by you is accurate, complete, and up to date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Services & Pricing</h2>
            <p>
              All services, pricing, availability, bookings, and transactions
              are subject to change at the sole discretion of Dhanganga without
              prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Intellectual Property</h2>
            <p>
              All content available on the Website, including text, graphics,
              logos, and service descriptions, is protected by applicable
              intellectual property laws and may not be copied, reproduced,
              modified, or distributed without prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Prohibited Activities</h2>
            <p>
              You agree not to misuse the Services, interfere with their
              operation, or attempt to gain unauthorized access to any part of
              the Website, servers, systems, or networks connected to the
              Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Limitation of Liability</h2>
            <p>
              Dhanganga shall not be liable for any direct or indirect loss,
              damage, delay, injury, or inconvenience arising from your use of
              or inability to use the Website or Services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Termination of Access</h2>
            <p>
              Dhanganga reserves the right to restrict, suspend, or terminate
              access to the Website or Services at any time in the event of
              misuse, fraud, violation of these Terms, or any unlawful activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes shall be subject to the exclusive
              jurisdiction of the competent courts in India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;