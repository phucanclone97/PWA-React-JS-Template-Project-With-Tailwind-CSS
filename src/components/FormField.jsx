import React from "react";
import { useTranslation } from "react-i18next";

function FormField({
  id,
  label,
  type = "text",
  placeholder,
  register,
  errors,
  validationRules = {},
  icon: IconComponent, // Pass the SVG component itself as a prop
  isRequired = false,
}) {
  const { t } = useTranslation();

  // Function to generate error messages (similar to the original)
  const getErrorMessage = (errorType, options = {}) => {
    const key = `validation.${errorType}`;
    // Use the label prop directly if it's a string key, or pass the id if label is complex
    const fieldName = typeof label === "string" ? t(label) : t(id);
    return t(key, { field: fieldName, ...options });
  };

  const error = errors[id];
  const hasIcon = !!IconComponent;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm text-gray-700 mb-1 font-bold"
      >
        {t(label)} {/* Translate the label key */}
        {isRequired && <span className="text-red-500">*</span>}
      </label>
      <div className="relative rounded-md shadow-sm">
        {hasIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <IconComponent className="w-5 h-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          id={id}
          {...register(id, validationRules)}
          className={`block w-80 rounded-lg border ${
            error ? "border-red-500" : "border-gray-300"
          } py-2.5 ${hasIcon ? "pl-12" : "px-6"} ${
            /* Adjust padding based on icon */
            type === "select" ? "pr-8 appearance-none" : "" // Add padding/appearance for select
          } text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
          placeholder={placeholder ? t(placeholder) : ""} // Translate placeholder key
        />
        {/* Add dropdown arrow for select type (optional, could be handled differently) */}
        {type === "select" && (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-600">
          {/* Custom message for validate type, otherwise use getErrorMessage */}
          {error.type === "validate"
            ? error.message
            : getErrorMessage(
                error.type,
                validationRules?.minLength
                  ? { count: validationRules.minLength }
                  : {}
              )}
        </p>
      )}
    </div>
  );
}

export default FormField;
