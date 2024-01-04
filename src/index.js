import React from "react";
import reactDom from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);

