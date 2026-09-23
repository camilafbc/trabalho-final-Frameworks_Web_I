import ErrorIcon from "@mui/icons-material/Error";
import { Box } from "@mui/material";

export default function ErrorComponent({ errorMessage }) {
  return (
    <Box
      variant="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        width: "100%",
      }}
    >
      <Box
        variant="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <ErrorIcon style={{ fontSize: 50 }} />
        <p>{errorMessage}</p>
      </Box>
    </Box>
  );
}
