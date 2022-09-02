/* components da aplicacao */
import NavBar from "./components/Header/index";
import GlobalStyle from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
    </div>
  );
}

export default App;
