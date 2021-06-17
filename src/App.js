import "./App.css";
import Comments from "./Component/Comments";
import NavBar from "./Component/NavBar";
import ReactPlayer from "react-player";
import SideBar from "./Component/SideBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="Container">
        <div className="row">
          <div className="content col-8 column">
            <ReactPlayer
              className="MainVideo"
              url="https://www.youtube.com/watch?v=1eNSWZ4x2ZU&t=1852s&ab_channel=DirtyyDianaDirtyyDiana"
            />
            <br></br>
            <Comments></Comments>
          </div>
          <div className="column">
            <SideBar className="SideBar"></SideBar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
