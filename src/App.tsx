/* components da aplicacao */
import NavBar from "./components/NavBar/index";
import GlobalStyle from './styles/global'
import Footer from "./components/Footer";

/* pages */
import Home from "./pages/Home";

/* react router */
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from "./pages/About/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
