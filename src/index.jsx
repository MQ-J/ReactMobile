import { render } from "react-dom";
import App from "./App";


var mountNode = document.getElementById("root");
render(<App name="Jane" />, mountNode);
