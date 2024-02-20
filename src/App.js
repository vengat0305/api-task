import "./App.css";
import Cards from "./Card.js/Card";
import usersData from "./Card.js/data";
function App() {
  return (
    <div className="App">
      <Cards usersData={usersData} />
    </div>
  );
}

export default App;
