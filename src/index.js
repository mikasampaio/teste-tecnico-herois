import React from "react"
import ReactDOM from "react-dom/client"

import { HeroProvider } from "./hooks/HeroContext"
import Home from "./pages/Home"
import GlobalStyles from "./styles/globalStyles"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <>
    <HeroProvider>
      <Home />
    </HeroProvider>
    <GlobalStyles />
  </>
)
