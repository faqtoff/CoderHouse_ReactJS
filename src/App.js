import ItemListContainer from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";
import './scss/main.scss'
function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
