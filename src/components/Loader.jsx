import { CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        minHeight: "100vh",
      }}
    >
      <CircularProgress />
      <p>Carregando...</p>
    </div>
  );
}
