import React from "react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-200 flex flex-col p-2">
      <div className="flex items-center">
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-5 h-5 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold text-gray-800">{t("back")}</h1>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800  ml-4">
          {t("personalInformation")}
        </h1>
      </div>
      <PersonalInfoForm />
    </div>
  );
}

export default Form;
