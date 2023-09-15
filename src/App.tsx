import HomePage from "./components/Home/HomePage";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="grid grid-rows-[80px,auto]">
      <Navbar />
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
