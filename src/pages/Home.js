import React from "react";
import { useTranslation } from "react-i18next";

function Home({ count, increment, decrement }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>

      <div className="mb-4">
        <button
          onClick={() => changeLanguage("en")}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("ar")}
          className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
        >
          Arabic
        </button>
        <button
          onClick={() => changeLanguage("he")}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Hebrew
        </button>
      </div>
      <h2 className="text-xl font-semibold mb-2">Home Count: {count}</h2>
      <div>
        <button
          onClick={increment}
          className="bg-green-500 text-white py-2 px-4 rounded mr-2 hover:bg-green-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Home;
