
import Box from "@mui/material/Box/Box";

import ProductsPage from "./products/page";
import { Navbar } from "./navbar";

export default async function Home() {
  

  return (
    <>
     <Navbar/>
      <div style={{ height: "100%", background: "#000" }}>
        <Box style={{ padding: "40px 25px" }}>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "40px",
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Welcome to the Saleor
          </h1>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "22px",
              fontFamily: "serif",
              fontStyle: "italic",
            }}
          >
            Best eCommerce platform..
          </h1>
          <Box sx={{ padding: "20px" }}>
            <h2
              style={{
                textAlign: "center",
                fontWeight: "600",
                fontSize: "28px",
                fontFamily: "serif",
              }}
            >
              Products
            </h2>
           <ProductsPage/>
          </Box>
        </Box>
      </div>
    </>
  );
}
