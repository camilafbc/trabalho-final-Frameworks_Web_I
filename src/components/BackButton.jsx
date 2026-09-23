import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button
      startIcon={<ArrowBackIcon />}
      onClick={() => navigate(-1)}
      sx={{ mb: 2, color: "secondary.main" }}
    >
      Voltar
    </Button>
  );
}
