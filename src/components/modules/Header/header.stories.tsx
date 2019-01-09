import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Header } from "./";

function renderHeader() {
  return <Header />;
}

storiesOf("components/modules/Header", module).add("overview", () =>
  renderHeader()
);
