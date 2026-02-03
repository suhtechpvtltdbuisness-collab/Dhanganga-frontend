import { ChevronDown, Phone, Upload } from "lucide-react";
import { useState } from "react";
import InformationCard from "../components/InformationCard";
import { Link } from "react-router-dom";


const JoinUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    lastEducation: "",
    mobileNumber: "",
    profilePhoto: null,
    businessDocuments: null,
    services: "",
    subServices: "",
    type: "",
    comment: "",
    agreeToTerms: false,
  });

  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    subServices: false,
    type: false,
  });

  const serviceOptions = [
    "Healthcare Services",
    "Eye Care & Treatment",
    "Surgical Services",
    "Diagnostic Services",
    "Consultation Services",
  ];

  const subServiceOptions = [
    "Cataract Surgery",
    "Retina Treatment",
    "Glaucoma Care",
    "Pediatric Eye Care",
    "LASIK Surgery",
  ];

  const typeOptions = [
    "Doctor",
    "Healthcare Professional",
    "Medical Consultant",
    "Specialist",
    "General Practitioner",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: e.target.files[0],
    }));
  };

  const handleDropdownSelect = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setDropdownOpen((prev) => ({
      ...prev,
      [field]: false,
    }));
  };

  const toggleDropdown = (field) => {
    setDropdownOpen((prev) => ({
      ...Object.keys(prev).reduce((acc, key) => {
        acc[key] = key === field ? !prev[key] : false;
        return acc;
      }, {}),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert("Please agree to the Terms and Conditions");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-white py-16 px-4 sm:px-8 pt-40">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-10 py-10 text-white text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
              Membership Form
            </h1>
            <p className="text-blue-100 text-lg font-medium">
              One Time Membership Fee{" "}
              <span className="font-semibold">₹ 1100/-</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Form Section */}
            <div className="flex-1 px-8 py-10 sm:px-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="नाम *"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="अपना नाम दर्ज करें"
                    required
                  />
                  <FloatingInput
                    label="पिता का नाम *"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    placeholder="पिता का नाम दर्ज करें"
                    required
                  />
                </div>

                {/* Education & Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="अंतिम पढ़ाई *"
                    name="lastEducation"
                    value={formData.lastEducation}
                    onChange={handleInputChange}
                    placeholder="शिक्षा की जानकारी"
                    required
                  />
                  <FloatingInput
                    label="मोबाइल नंबर"
                    name="mobileNumber"
                    type="tel"
                    value={formData.mobileNumber}
                    onChange={handleInputChange}
                    placeholder="मोबाइल नंबर दर्ज करें"
                  />
                </div>

                {/* File Uploads */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FileUpload
                    label="Profile Photo"
                    id="profilePhoto"
                    file={formData.profilePhoto}
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "profilePhoto")}
                  />
                  <FileUpload
                    label="Business Documents"
                    id="businessDocuments"
                    file={formData.businessDocuments}
                    accept=".pdf,.doc,.docx"
                    onChange={(e) => handleFileChange(e, "businessDocuments")}
                  />
                </div>

                {/* Dropdowns */}
                <Dropdown
                  label="Select Services"
                  field="services"
                  open={dropdownOpen.services}
                  toggle={toggleDropdown}
                  options={serviceOptions}
                  selected={formData.services}
                  onSelect={handleDropdownSelect}
                />

                <Dropdown
                  label="Select SubServices"
                  field="subServices"
                  open={dropdownOpen.subServices}
                  toggle={toggleDropdown}
                  options={subServiceOptions}
                  selected={formData.subServices}
                  onSelect={handleDropdownSelect}
                />

                <Dropdown
                  label="Select Type"
                  field="type"
                  open={dropdownOpen.type}
                  toggle={toggleDropdown}
                  options={typeOptions}
                  selected={formData.type}
                  onSelect={handleDropdownSelect}
                />

                {/* Comment */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Comment
                  </label>
                  <textarea
                    name="comment"
                    rows={4}
                    value={formData.comment}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                    placeholder="अपनी टिप्पणी यहाँ लिखें..."
                  ></textarea>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />

                  <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
                    I agree to{" "}
                    <Link
                      to="/terms"
                      className="text-blue-600 hover:text-blue-700 underline font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </Link>
                    .
                  </label>
                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition duration-200"
                >
                  Next →
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:w-96 bg-gradient-to-br from-blue-50 to-indigo-100 px-8 py-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-100">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  REACH OUT NOW!
                </h3>
                <div className="flex items-center justify-center mb-8">
                  <Phone className="h-8 w-8 text-blue-600 mr-3" />
                  <a
                    href="tel:+917764026786"
                    className="text-3xl font-extrabold text-blue-600 hover:text-blue-700 transition"
                  >
                    (+91) 7764026786
                  </a>
                </div>

                {/* Info Cards */}
                <div className="space-y-6">
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Benefits of Membership
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li>✔ Access to premium healthcare services</li>
                      <li>✔ Priority appointment booking</li>
                      <li>✔ Exclusive health consultations</li>
                      <li>✔ Special discounts on treatments</li>
                    </ul>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md border border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">
                      Contact Information
                    </h4>
                    <p className="text-sm text-gray-600">
                      For any queries or assistance, reach out to us during
                      business hours. We're happy to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra Info Section */}
      <div className="mt-4">
        <InformationCard />
      </div>
    </div>
  );
};

/* ------------------ REUSABLE COMPONENTS ------------------ */

const FloatingInput = ({
  label,
  name,
  value,
  onChange,

  type = "text",
  required,
}) => (
  <div className="relative">
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
      className="peer w-full px-4 pt-5 pb-2 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
    />
    <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600">
      {label}
    </label>
  </div>
);

const FileUpload = ({ label, id, file, onChange, accept }) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <div className="relative">
      <input
        type="file"
        accept={accept}
        onChange={onChange}
        className="hidden"
        id={id}
      />
      <label
        htmlFor={id}
        className="w-full px-4 py-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 flex items-center justify-between shadow-sm"
      >
        <span className="text-gray-600">
          {file ? file.name : "Choose File"}
        </span>
        <Upload className="h-5 w-5 text-gray-400" />
      </label>
    </div>
  </div>
);

const Dropdown = ({
  label,
  field,
  open,
  toggle,
  options,
  selected,
  onSelect,
}) => (
  <div className="relative">
    <label className="block text-sm font-semibold text-gray-700 mb-2">
      {label}
    </label>
    <button
      type="button"
      onClick={() => toggle(field)}
      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-left hover:bg-gray-50 flex items-center justify-between shadow-sm"
    >
      <span className={selected ? "text-gray-800" : "text-gray-500"}>
        {selected || label}
      </span>
      <ChevronDown
        className={`h-5 w-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""
          }`}
      />
    </button>
    {open && (
      <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
        {options.map((option, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(field, option)}
            className="w-full px-4 py-3 text-left hover:bg-blue-50"
          >
            {option}
          </button>
        ))}
      </div>
    )}
  </div>
);

export default JoinUs;