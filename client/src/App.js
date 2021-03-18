import bgImg from "./assets/bg.jpg";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import StartScreen from "./screens/StartScreen/StartScreen";
import AddLinkScreen from "./screens/AddLinkScreen/AddLinkScreen";
import ConfirmScreen from "./screens/ConfirmScreen/ConfirmScreen";
import RedirectScreen from "./screens/RedirectScreen/RedirectScreen";
import { useLocation } from "react-router-dom";

function App() {
  const route = useLocation().pathname;
  let background = bgImg;
  return (
    <div className="appCover">
      <img className="imageResponsive" src={background} />
      <Switch>
        <Route path="/addlink" component={AddLinkScreen} />
        <Route path="/confirm" component={ConfirmScreen} />
        <Route path="/:id" component={RedirectScreen} />
        <Route path="/" exact component={StartScreen} />
      </Switch>
    </div>
  );
}

export default App;
