import React from "react";
import { render } from "react-dom";

import Console from "./components/Console";
import Commands from "./commands";

render(<Console commands={Commands} />, document.getElementById("app"));