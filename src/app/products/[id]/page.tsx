import { GET_PRODUCT } from "../../../lib/queries";
import client from "../../../lib/apollo-client";
import Image from "next/image";
import { extractAndDisplayText } from "@/app/utils";
import { Navbar } from "@/app/navbar";
import { Box, Button, Rating } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id: string = params.id;

  const getProductData = async (id: string) => {
    const { data } = await client.query({
      query: GET_PRODUCT,
      variables: { id: decodeURIComponent(id) },
    });
    return data?.product ?? null;
  };

  const product = await getProductData(id);
  if (!product) {
    return (
      <div className="w-screen h-screen flex gap-2 items-center justify-center">
        <p>Error loading product</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Box sx={{ background: "#000", height: "88.7vh" }}>
        <Box sx={{ padding: "30px 45px", color: "#fff" }}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
            style={{ position: "relative", width: "100%", height: "400px" }}
          >
            <Image
              src={product.images[0].url}
              alt={product.name || "NA"}
              width={500}
              height={500}
              className="object-contain w-full h-auto max-h-[400px]"
              style={{ border: "1px solid #453636", borderRadius: "8px" }}
            />
            <div>
              <div className="flex flex-row">
                <div className="p-1 rounded">
                  <p className="text-4xl font-medium tracking-wide uppercase mb-4">
                    {product.name}
                  </p>
                </div>
              </div>
              <p className="text-md mt-2 mb-4">
                <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
              </p>
              <div className="text-md  capitalize">
                <span className="me-2">
                  <span
                    className="text-xl font-bold"
                    style={{ textDecoration: "line-through" }}
                  >
                    ${product.pricing.priceRange.start.gross.amount || ""}
                  </span>
                  <span className="text-lg font-bold ml-2">
                    ${product.pricing.priceRange.start.gross.amount - 0.5 || ""}
                  </span>
                </span>
              </div>
              <p className="text-lg mt-2 mb-4">
                {extractAndDisplayText(product.description) || ""}
              </p>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                  <p className="text-md  capitalize">
                    Brand: {product?.brand || "NA"}
                  </p>
                </Box>
                <Box>
                  <p className="text-md  capitalize">
                    Category: {product.category.name || ""}
                  </p>
                </Box>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop:'10px' }}>
                <Box>
                  <p className="text-md  capitalize">Return Policy: NA</p>
                </Box>
                <Box>
                  <p className="text-md  capitalize">Warranty: 1 Year</p>
                </Box>
              </Box>

              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop:'10px' }}>
                <Box>
                  <p className="text-md  capitalize">
                    Availability:{" "}
                    {product.isAvailableForPurchase ? (
                      <span className="text-green-500">In Stock</span>
                    ) : (
                      <span className="text-red-500">Out of Stock</span>
                    )}
                  </p>
                </Box>
                <Box>
                  <p className="text-md ">
                    Weight: {product.weight.value}{" "}
                    <span className="lowercase">{product.weight.unit}</span>
                  </p>
                </Box>
              </Box>

              <Button
                variant="outlined"
                fullWidth
                sx={{
                  textAlign: "center",
                  color: "#a9a9a9",
                  marginTop: "40px",
                  borderColor: "#a9a9a9",
                  "&:hover": {
                    borderColor: "#fff",
                    color: "#fff", // White border on hover
                  },
                }}
              >
                Add to cart
                <ShoppingCartIcon sx={{ width: "15px", ml: "5px" }} />
              </Button>
            </div>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
