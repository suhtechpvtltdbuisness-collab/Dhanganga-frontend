import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          Privacy Policy
        </motion.h1>

        <motion.p
          className="text-slate-600 mb-8"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          At <strong>nayesochnayakadam.com</strong>, we are committed to protecting
          the privacy and personal information of our users and customers.
        </motion.p>

        <div className="space-y-8 text-slate-700">
          <section>
            <p>
              This Privacy Policy explains how personal information is collected,
              used, stored, and protected when you access or use services
              provided under <strong>Dhanganga Online Public Kendra</strong>,{" "}
              <strong>Dhanganga Associate</strong>,{" "}
              <strong>Dhanganga Physical Treatment Home</strong>,{" "}
              <strong>Dhanganga Store</strong>,{" "}
              <strong>Dhanganga Real Estate</strong>,{" "}
              <strong>Dhanganga Hire Services</strong>, and{" "}
              <strong>Dhanganga Hire Vehicle</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal information such as your name, contact
              details, address, identification information, and transaction-
              related details when you voluntarily submit it through forms,
              bookings, inquiries, or service requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              2. Use of Information
            </h2>
            <p>
              The information collected is used solely for providing services,
              processing requests, maintaining records, improving service
              quality, communicating with users, and complying with applicable
              legal and regulatory obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              3. Sharing of Information
            </h2>
            <p>
              We do not sell, rent, or trade your personal data to third parties.
              However, information may be shared with authorized service
              providers or government authorities where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              4. Data Security
            </h2>
            <p>
              Reasonable administrative, technical, and physical security
              measures are implemented to protect personal data against
              unauthorized access, misuse, or disclosure. However, no method of
              online transmission or storage is completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              5. Consent
            </h2>
            <p>
              By using this Website and its Services, you consent to the
              collection and use of your personal information in accordance
              with this Privacy Policy and applicable Indian data protection
              laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">
              6. Policy Updates
            </h2>
            <p>
              Continued use of the Website signifies your acceptance of any
              updates or modifications to this Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;