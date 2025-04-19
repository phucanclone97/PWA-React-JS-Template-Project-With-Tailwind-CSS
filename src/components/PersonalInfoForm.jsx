import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

function PersonalInfoForm() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const [selectedGender, setSelectedGender] = useState("male");

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Handle form submission logic here (e.g., API call)
    alert("Form submitted! Check console for data.");
  };

  // Example validation messages - can be refined
  const getErrorMessage = (fieldName, errorType, options = {}) => {
    if (!errors[fieldName]) return null;
    const key = `validation.${errorType}`;
    return t(key, { field: t(fieldName), ...options });
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
      {/* Header with Back Button */}
      <div className="flex items-center mb-6">
        <button className="p-2 rounded-full hover:bg-gray-200 mr-2">
          {/* Placeholder for Back Icon - Use an SVG or Icon font here */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
          {t("personalInfo")}
        </h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("fullName")}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {/* Placeholder for User Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="fullName"
              {...register("fullName", { required: true })}
              className={`block w-full rounded-lg border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } py-2.5 pl-10 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder={t("fullNamePlaceholder")}
            />
          </div>
          {errors.fullName && (
            <p className="mt-1 text-xs text-red-600">
              {getErrorMessage("fullName", "required")}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("email")}
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className={`block w-full rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } py-2.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder={t("emailPlaceholder")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600">
              {getErrorMessage("email", "email")}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("password")}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {/* Placeholder for Lock Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <input
              type="password"
              id="password"
              {...register("password", { required: true, minLength: 8 })}
              className={`block w-full rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } py-2.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder={t("passwordPlaceholder")}
            />
          </div>
          {errors.password?.type === "required" && (
            <p className="mt-1 text-xs text-red-600">
              {getErrorMessage("password", "required")}
            </p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="mt-1 text-xs text-red-600">
              {getErrorMessage("password", "minLength", { count: 8 })}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("confirmPassword")}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {/* Placeholder for Lock Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: true,
                validate: (value) =>
                  value === password || t("validation.passwordMatch"),
              })}
              className={`block w-full rounded-lg border ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } py-2.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder={t("confirmPasswordPlaceholder")}
            />
          </div>
          {errors.confirmPassword && (
            <p className="mt-1 text-xs text-red-600">
              {errors.confirmPassword.message ||
                getErrorMessage("confirmPassword", "required")}
            </p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dob"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("dob")}
            <span className="text-red-500">*</span>
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              {/* Placeholder for Calendar Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </div>
            <input
              type="text" // Consider using type="date" or a date picker library
              id="dob"
              {...register("dob", { required: true })}
              className={`block w-full rounded-lg border ${
                errors.dob ? "border-red-500" : "border-gray-300"
              } py-2.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
              placeholder={t("dobPlaceholder")}
            />
          </div>
          {errors.dob && (
            <p className="mt-1 text-xs text-red-600">
              {getErrorMessage("dob", "required")}
            </p>
          )}
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {t("gender")}
            <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setSelectedGender("male")}
              className={`flex items-center justify-center px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors duration-150 ${
                selectedGender === "male"
                  ? "bg-blue-100 border-blue-500 text-blue-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {/* Placeholder for Male Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h3m-6.75 6.75a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
                />
              </svg>
              {t("male")}
            </button>
            <button
              type="button"
              onClick={() => setSelectedGender("female")}
              className={`flex items-center justify-center px-4 py-2.5 border rounded-lg text-sm font-medium transition-colors duration-150 ${
                selectedGender === "female"
                  ? "bg-pink-100 border-pink-500 text-pink-700"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {/* Placeholder for Female Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 13.5v-3m0 0V7.5m0 3H7.5M10.5 10.5h3m-3 3a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
                />
              </svg>
              {t("female")}
            </button>
            {/* Hidden input to register gender with react-hook-form */}
            <input
              type="hidden"
              {...register("gender", { required: true })}
              value={selectedGender}
            />
          </div>
          {errors.gender && (
            <p className="mt-1 text-xs text-red-600">
              {getErrorMessage("gender", "required")}
            </p>
          )}
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="addressRegion"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {t("address")}
          </label>
          {/* Address Selection (Placeholder - Requires state/province data) */}
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
              {/* Add options for Tỉnh/Thành phố, Quận/Huyện here */}
              <option value="hcm">TP. Hồ Chí Minh</option>
              <option value="hanoi">Hà Nội</option>
              {/* ... more options ... */}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              {/* Placeholder for Dropdown Arrow */}
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Street Address */}
          <input
            type="text"
            id="addressStreet"
            {...register("addressStreet")}
            className={`block w-full rounded-lg border ${
              errors.addressStreet ? "border-red-500" : "border-gray-300"
            } py-2.5 px-3 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            placeholder={t("addressStreetPlaceholder")}
          />
          {/* Add validation errors if needed */}
        </div>

        {/* Submit Button */}
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
