import React, { Fragment } from "react";
import Header from "./components/layouts/Header";
import Nav from "./components/layouts/Nav";
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <Fragment>
      <Header>
        <Nav />
      </Header>
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
