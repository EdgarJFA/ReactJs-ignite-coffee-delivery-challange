import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { DeliveryOrderContextProvider } from "./contexts/DeliveryOrderContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
      <DeliveryOrderContextProvider>
        <Router />
      </DeliveryOrderContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
