import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";

import MyTitle from "./components/MyTitle";
import TrendingNow from "./components/TrendingNow";
import WatchIt from "./components/WatchIt";
import NewRealeases from "./components/NewReleases";
import MyFooter from "./components/MyFooter";
import FilterBook from "./components/FilterBook";

function App() {
  return (
    <div className="ad">
      <MyNavbar />
      <MyTitle />
      <TrendingNow />
      <WatchIt />
      <NewRealeases />
      <MyFooter />
    </div>
  );
}

export default App;
