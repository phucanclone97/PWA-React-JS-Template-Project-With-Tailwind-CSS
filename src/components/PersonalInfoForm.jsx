import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormField from "./FormField";

// Import Icon components
import UserIcon from "../icons/UserIcon";
import LockIcon from "../icons/LockIcon";
import CalendarIcon from "../icons/CalendarIcon";
import MaleIcon from "../icons/MaleIcon";
import FemaleIcon from "../icons/FemaleIcon";

function PersonalInfoForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      gender: "male",
    },
  });
  const [selectedGender, setSelectedGender] = useState("male");

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted! Check console for data.");
  };

  const handleGenderChange = (genderValue) => {
    setSelectedGender(genderValue);
    setValue("gender", genderValue, { shouldValidate: true });
  };

  const getErrorMessage = (fieldName, errorType, options = {}) => {
    if (!errors[fieldName]) return null;
    const key = `validation.${errorType}`;
    return t(key, { field: t(fieldName), ...options });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
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

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          id="fullName"
          label="fullName"
          placeholder="fullNamePlaceholder"
          register={register}
          errors={errors}
          validationRules={{ required: true }}
          icon={UserIcon}
          isRequired
        />

        <FormField
          id="email"
          label="email"
          type="email"
          placeholder="emailPlaceholder"
          register={register}
          errors={errors}
          validationRules={{
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          }}
        />

        <FormField
          id="password"
          label="password"
          type="password"
          placeholder="passwordPlaceholder"
          register={register}
          errors={errors}
          validationRules={{ required: true, minLength: 8 }}
          icon={LockIcon}
          isRequired
        />

        <FormField
          id="confirmPassword"
          label="confirmPassword"
          type="password"
          placeholder="confirmPasswordPlaceholder"
          register={register}
          errors={errors}
          validationRules={{
            required: true,
            validate: (value) =>
              value === password || t("validation.passwordMatch"),
          }}
          icon={LockIcon}
          isRequired
        />

        <FormField
          id="dob"
          label="dob"
          placeholder="dobPlaceholder"
          register={register}
          errors={errors}
          validationRules={{ required: true }}
          icon={CalendarIcon}
          isRequired
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("gender")}
            <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => handleGenderChange("male")}
              className={`flex items-center justify-center px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors duration-150 ${
                selectedGender === "male"
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <MaleIcon className="w-5 h-5 mr-2" />
              {t("male")}
            </button>
            <button
              type="button"
              onClick={() => handleGenderChange("female")}
              className={`flex items-center justify-center px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors duration-150 ${
                selectedGender === "female"
                  ? "bg-pink-100 border-pink-500 text-pink-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <FemaleIcon className="w-5 h-5 mr-2" />
              {t("female")}
            </button>
            <input type="hidden" {...register("gender", { required: true })} />
          </div>
          {errors.gender && (
            <p className="mt-1 text-xs text-red-600">
              {getErrorMessage("gender", "required")}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("address")}
          </label>
          <div className="relative mb-2">
            <select
              id="addressRegion"
              {...register("addressRegion")}
              className={`block w-full rounded-lg border ${
                errors.addressRegion ? "border-red-500" : "border-gray-300"
              } py-2.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 appearance-none pr-8`}
              defaultValue=""
            >
              <option value="" disabled>
                {t("addressSelectPlaceholder")}
              </option>
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="hanoi">Hà Nội</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <FormField
            id="address"
            label={undefined}
            placeholder="addressStreetPlaceholder"
            register={register}
            errors={errors}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 mt-6"
        >
          {t("continue")}
        </button>
      </form>
    </div>
  );
}

export default PersonalInfoForm;
