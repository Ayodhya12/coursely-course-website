import { Hero } from "./components/hero";
import "./app.css";
import { MainMenu } from "./components/main-menu";
import { AboutUs } from "./pages/about-us";

function App() {
  return (
    <div className="">
      <MainMenu />
      <Hero />
      <AboutUs />
    </div>
  );
}

export default App;
