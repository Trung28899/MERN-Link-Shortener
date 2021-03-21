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
  const condition = route === "/confirm";
  let background = bgImg;
  const img1 =
    "https://firebasestorage.googleapis.com/v0/b/on-card.appspot.com/o/personal%2Ftoronto%20moon.jpg?alt=media&token=88a40233-1432-4078-89d1-f4aa6443da7d";
  const img2 =
    "https://firebasestorage.googleapis.com/v0/b/on-card.appspot.com/o/personal%2Ftoronto_day.jpg?alt=media&token=36ba690a-e5e7-46c0-accc-cb0a9ac7362a";

  return (
    <div className="appCover">
      {condition ? (
        <img className="imageResponsiveConfirm" src={img1} />
      ) : (
        <img className="imageResponsive" src={img2} />
      )}
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
