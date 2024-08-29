import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Space } from "antd"; // Importing Button and Space from Ant Design

function Home({ count, increment, decrement }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>

      <Space className="mb-4">
        {/* Replaced MUI Button with Antd Button */}
        <Button
          type="primary"
          onClick={() => changeLanguage("en")}
          className="mx-2"
        >
          English
        </Button>

        <Button
          type="primary"
          onClick={() => changeLanguage("ar")}
          className="mx-2"
        >
          Arabic
        </Button>

        <Button type="primary" onClick={() => changeLanguage("he")}>
          Hebrew
        </Button>
      </Space>

      <h2 className="text-xl font-semibold mb-2">Home Count: {count}</h2>

      <Space>
        <Button type="primary" onClick={increment}>
          Increment
        </Button>

        <Button type="primary" onClick={decrement}>
          Decrement
        </Button>
      </Space>
    </div>
  );
}

export default Home;
