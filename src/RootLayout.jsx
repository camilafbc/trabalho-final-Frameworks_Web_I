import { Container } from "@mui/material";
import { Outlet } from "react-router";
import theme from "./theme";
import SearchInput from "./components/SearchInput";

export default function RootLayout() {
  return (
    <div
      style={{
        background: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        <SearchInput />
        <Outlet />
      </Container>
    </div>
  );
}
