import Image from "next/image";
import logo from "./logo.svg";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";
export const Navbar = () => {
  return (
    <nav
      style={{
        background: "#B4121B",
        color: "#fff",
        minHeight: "70px",
        padding: "30px 45px",
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
          <Link href={`/`}>
      <Image height={100} width={100} alt="logo" src={logo} />
      </Link>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "25%" }}
      >
        <Typography
          variant="overline"
          gutterBottom
          sx={{
            display: "block",
            color: "#e1e1e1",
            "&:hover": {
              color: "#fff", // White border on hover,
              cursor: "pointer",
            },
          }}
        >
          Contact Us
        </Typography>
        <Link href={`/`}>
        <Typography
          variant="overline"
          gutterBottom
          sx={{
            display: "block",
            color: "#e1e1e1",
            "&:hover": {
              color: "#fff", // White border on hover,
              cursor: "pointer",
            },
          }}
        >
          Home
        </Typography>
        </Link>
        <Typography
          variant="overline"
          gutterBottom
          sx={{
            display: "block",
            color: "#e1e1e1",
            "&:hover": {
              borderColor: "#fff",
              color: "#fff", // White border on hover
              cursor: "pointer",
            },
          }}
        >
          Login
        </Typography>
        <ShoppingCartIcon sx={{  "&:hover": {             
              cursor: "pointer",
            }}}/>
      </Box>
    </nav>
  );
};
