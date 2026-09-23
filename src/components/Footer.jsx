import { Box, Typography } from "@mui/material";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: "background.paper",
        textAlign: "center",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ maxWidth: "600px", mx: "auto" }}
      >
        Plataforma de busca de filmes desenvolvida para fins acadêmicos. Este
        produto utiliza a API do TMDb, mas não é endossado ou certificado pelo
        TMDb.
      </Typography>
    </Box>
  );
}
