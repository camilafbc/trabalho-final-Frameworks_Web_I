import theme from "./theme.js";
import "./style.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { RouterProvider } from "react-router";

import { router } from "./routes";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </MuiThemeProvider>
  );
}

export default App;
