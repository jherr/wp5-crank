import { createElement } from "@bikeshaving/crank";
import { renderer } from "@bikeshaving/crank/dom";

import "./index.css";

import QOTD from "comps/QOTD";

function* ClickTest() {
  let count = 0;
  const handleClick = () => {
    count++;
    this.refresh();
  };

  while (true) {
    yield (
      <div>
        The button has been clicked {count} {count === 1 ? "time" : "times"}.
        <button onclick={handleClick}>Click me</button>
      </div>
    );
  }
}

renderer.render(
  <div>
    <QOTD />
    <ClickTest />
  </div>,
  document.getElementById("app")
);
