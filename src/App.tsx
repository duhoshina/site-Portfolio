/* components da aplicacao */
import NavBar from "./components/NavBar/index";
import GlobalStyle from './styles/global'

/* pages */
import Home from "./pages/Home";

/* react router */
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStyle />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
