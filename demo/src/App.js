import "./App.css";
import { Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WatchCategory from "./components/WatchCategory";
import Recipe from "./Recipe";
function App() {
  return (
    <div className="">
      <Header />
      <main className="content container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/category/:name" component={WatchCategory} />
          <Route path="/meal/:id" component={Recipe} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
