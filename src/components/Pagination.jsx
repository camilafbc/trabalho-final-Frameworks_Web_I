import { Box } from "@mui/material";
import Pagination from "@mui/material/Pagination";

export default function PaginationComponent({
  currentPage,
  totalPages,
  onPageChange,
}) {
  return (
    <Box
      variant="div"
      sx={{ display: "flex", justifyContent: "center", my: 4 }}
    >
      <Pagination
        count={totalPages}
        page={currentPage}
        variant="text"
        shape="rounded"
        color={"secondary"}
        size="large"
        onChange={onPageChange}
      />
    </Box>
  );
}
