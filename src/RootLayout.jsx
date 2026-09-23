import { Container } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import theme from "./theme";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";

export default function RootLayout() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    navigate(`/buscar?query=${encodeURIComponent(searchQuery.trim())}`);
  };

  return (
    <div
      style={{
        background: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Navbar
        value={searchQuery}
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
      />
      <Container maxWidth="lg">
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}
