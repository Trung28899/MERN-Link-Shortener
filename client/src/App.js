import bgImg from "./assets/background.jpg";
import bgImg2 from "./assets/bg.jpg";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import StartScreen from "./screens/StartScreen/StartScreen";
import AddLinkScreen from "./screens/AddLinkScreen/AddLinkScreen";
import ConfirmScreen from "./screens/ConfirmScreen/ConfirmScreen";
import RedirectScreen from "./screens/RedirectScreen/RedirectScreen";
import { useLocation } from "react-router-dom";

function App(props) {
  const route = useLocation().pathname;
  let background;
  if (route === "/addlink") {
    background = bgImg;
  } else {
    background = bgImg2;
  }
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
