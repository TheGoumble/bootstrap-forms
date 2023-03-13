import Header from "./components/Header"
import Home from "./pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Footer from "./components/Footer"
import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div id="content-wrap">
        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

const NotFound = () => {
  return (
    <>
      <h3>page not found </h3>
    </>
  )
}

export default App
