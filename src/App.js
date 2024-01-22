import "./App.css";
import CustomButton from "./components/button";
import MovieList from "./components/movielist";

function App() {
  return (
    <div className="App">
      <h1>This is the Home Page</h1>
      <CustomButton />
      <CustomButton />
      <CustomButton />
      <br />
      <MovieList />
    </div>
  );
}

export default App;
