import React, { Fragment } from "react";
import Header from "./layouts/Header";
import Nav from "./layouts/Nav";
import Main from "./layouts/Main";
import Footer from "./layouts/Footer";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Header>
        <Nav />
      </Header>
      <Main />
      <Footer />
    </Fragment>
  );
}

export default App;
