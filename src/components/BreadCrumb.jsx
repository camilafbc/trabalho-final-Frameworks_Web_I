import { Breadcrumbs, Link, Typography } from "@mui/material";

export default function BreadCrumb({ items }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ my: 2 }}>
      <Link underline="hover" color="inherit" href="/">
        Home
      </Link>
      {items.map((item, index) =>
        item.href ? (
          <Link key={index} underline="hover" color="inherit" href={item.href}>
            {item.label}
          </Link>
        ) : (
          <Typography key={index} sx={{ color: "text.primary" }}>
            {item.label}
          </Typography>
        ),
      )}
    </Breadcrumbs>
  );
}
