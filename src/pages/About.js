import React from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function About({ count, increment, decrement }) {
  return (
    <Card className="mx-auto max-w-md shadow-md">
      <CardContent>
        <h2 className="text-xl font-semibold mb-2 text-center">About Count: {count}</h2>
        <Box className="text-center">
          <Button
            variant="contained"
            color="success"
            onClick={increment}
            className="mx-2"
          >
            Increment
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={decrement}
          >
            Decrement
          </Button>
        </Box>
        <h1 className="text-2xl font-bold mt-4 text-center">About Page</h1>
      </CardContent>
    </Card>
  );
}

export default About;
