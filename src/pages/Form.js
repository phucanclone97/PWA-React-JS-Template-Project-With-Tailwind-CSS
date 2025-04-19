import React from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation
import PersonalInfoForm from "../components/PersonalInfoForm";

function Form() {
  const { i18n } = useTranslation(); // Get i18n instance

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Language Switcher */}
      <div className="mb-4 space-x-2">
        <button
          onClick={() => changeLanguage("en")}
          className={`px-3 py-1 rounded ${
            i18n.language === "en" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("vi")}
          className={`px-3 py-1 rounded ${
            i18n.language === "vi" ? "bg-blue-600 text-white" : "bg-gray-300"
          }`}
        >
          Tiếng Việt
        </button>
      </div>

      <PersonalInfoForm />
    </div>
  );
}

export default Form;
