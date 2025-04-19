import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu } from "antd"; // Importing Ant Design components
import Home from "./pages/Home";
import About from "./pages/About";
import useHomeStore from "./stores/HomeStore";
import useAboutStore from "./stores/AboutStore";
import Form from "./pages/Form";

const { Header, Content } = Layout; // Destructuring Ant Design Layout components

function App() {
  const {
    count: homeCount,
    increment: homeIncrement,
    decrement: homeDecrement,
  } = useHomeStore();
  const {
    count: aboutCount,
    increment: aboutIncrement,
    decrement: aboutDecrement,
  } = useAboutStore();

  return (
    <Router>
      <div className="">
        <Header className="top-0">
          {/* Using Ant Design Menu for navigation */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/form">Form</Link>
            </Menu.Item>
          </Menu>
        </Header>

        <Content className="container mx-auto">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  count={homeCount}
                  increment={homeIncrement}
                  decrement={homeDecrement}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About
                  count={aboutCount}
                  increment={aboutIncrement}
                  decrement={aboutDecrement}
                />
              }
            />
            <Route path="/form" element={<Form />} />
          </Routes>
        </Content>
      </div>
    </Router>
  );
}

export default App;
