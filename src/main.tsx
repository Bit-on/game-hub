import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, useInputGroupStyles } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
