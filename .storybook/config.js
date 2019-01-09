import { configure, addDecorator } from "@storybook/react";
import { withScreenshot } from "zisui";
import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { createGlobalStyle } from "styled-components";

document.title = "browser";

addDecorator(
  withScreenshot({
    viewport: {
      width: 1024,
      height: 768
    }
  })
);

const StorybookGlobalStyle = createGlobalStyle`
  html {
    background: transparent;
  }
`;

const store = createStore(() => {}, {});
addDecorator(story => (
  <React.Fragment>
    <StorybookGlobalStyle />
    <Provider store={store}>{story()}</Provider>
  </React.Fragment>
));

const req = require.context("../src", true, /\.stories\.tsx/);

configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
