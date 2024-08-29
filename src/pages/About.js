import React from "react";
import { Card, Button, Space } from "antd"; // Importing Ant Design components

function About({ count, increment, decrement }) {
  return (
    <Card className="mx-auto max-w-md shadow-md">
      <div className="p-4">
        {" "}
        {/* Replaced MUI's CardContent with a div */}
        <h2 className="text-xl font-semibold mb-2 text-center">
          About Count: {count}
        </h2>
        <div className="text-center">
          {" "}
          {/* Replaced MUI's Box with a div */}
          <Space>
            {" "}
            {/* Using Ant Design's Space for spacing between buttons */}
            <Button type="primary" onClick={increment} className="mx-2">
              Increment
            </Button>
            <Button type="primary" danger onClick={decrement}>
              Decrement
            </Button>
          </Space>
        </div>
        <h1 className="text-2xl font-bold mt-4 text-center">About Page</h1>
      </div>
    </Card>
  );
}

export default About;
