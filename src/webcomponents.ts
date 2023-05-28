import React from "react";
import * as ReactDOMClient from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

import { Composer } from "./composer";

customElements.define(
  "rwc-header",
  // @ts-ignore
  reactToWebComponent(Header, React, ReactDOMClient, {
    props: ["text"],
  })
);

customElements.define(
  "rwc-header2",
  // @ts-ignore
  reactToWebComponent(Header, React, ReactDOMClient, {
    props: ["text"],
  })
);

// customElements.define(
//   "rwc-example",
//   // @ts-ignore
//   reactToWebComponent(Example, React, ReactDOMClient)
// );