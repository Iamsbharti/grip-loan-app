import React from "react";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
function App() {
  return (
    <React.Fragment>
      <Header />
      <Homepage />
      <Footer />
      <ToastContainer autoClose={3000} hideProgressBar />
    </React.Fragment>
  );
}

export default App;
