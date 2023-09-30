import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/*
 -Header
 -Body

 -Footer
 */
const App = () => {
  return (
    <div id="App">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
