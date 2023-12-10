import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  --background-color: #EEEEEE;
  --container-color: white;
  --shadow-color: #e4e4e4;
  --point-color: #66BB6A;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:root {
  -webkit-tap-highlight-color: transparent;
  cursor: default;
  -moz-tab-size: 4;
  tab-size: 4;
}

html,
body {
  height: 100%;
  width: 100%;
  border: none;
  margin: 0;
  padding: 0;
}

body > div:first-child {
  height: 100%;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button {
  background: none;
  border: 0;
  cursor: pointer;
  padding: 0;
}

a {
  text-decoration: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-block-start: unset;
  margin-block-end: unset;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

ul {
  list-style: none;
  padding-left: unset;
  padding-inline-start: unset;
  margin-block-start: unset;
  margin-block-end: unset;
}
` 