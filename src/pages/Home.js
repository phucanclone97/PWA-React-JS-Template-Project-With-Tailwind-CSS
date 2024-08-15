import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Home({ count, increment, decrement }) {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mb-4">{t("welcome")}</h1>
      <p className="mb-4">{t("description")}</p>

      <Box className="mb-4">
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeLanguage("en")}
          className="mx-2"
        >
          English
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeLanguage("ar")}
          className="mx-2"
        >
          Arabic
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => changeLanguage("he")}
        >
          Hebrew
        </Button>
      </Box>

      <h2 className="text-xl font-semibold mb-2">Home Count: {count}</h2>
      <Box>
        <Button
          variant="contained"
          color="success"
          onClick={increment}
          sx={{ mx: 2 }} // MUI styling
          className="bg-blue-500 hover:bg-green-600" // Tailwind CSS classes
        >
          Increment
        </Button>

        <Button variant="contained" color="error" onClick={decrement}>
          Decrement
        </Button>
      </Box>
    </div>
  );
}

export default Home;
