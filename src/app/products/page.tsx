import { GET_PRODUCTS } from "../../lib/queries";
import client from "../../lib/apollo-client";
import Image from "next/image";
import { NodeTypeProps } from "@/lib/types";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const ProductsPage = async () => {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });
    const products = data.products.edges.map(
    ({ node }: { node: NodeTypeProps }) => node
  );


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
      {products.map((node: NodeTypeProps) => (
        <div key={node.id} className="border p-4 rounded shadow-lg text-white">
          <Link href={`/products/${node.id}`}>
            <Image
              width={350}
              height={350}
              src={node.thumbnail.url}
              alt={node.name}
              className="mb-2"
            />
            <p className="font-bold text-lg capitalize">{node.name}</p>
            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
            <p>
              
                <label style={{ textDecoration: "line-through" }}>
                  ${node.pricing.priceRange.stop?.net.amount}
                </label>
              
              <label style={{ marginLeft: "5px" }}>
                ${node.pricing.priceRange.stop?.net.amount - 0.5}
              </label>
            </p>
          </Link>
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              textAlign: "center",
              color: "#a9a9a9",
              borderColor: "#a9a9a9", // Initial border color
              "&:hover": {
                borderColor: "#fff",
                color:"#fff" // White border on hover
              },
            }}
          >
            {" "}
            Add to cart<ShoppingCartIcon sx={{width:'15px',ml:"5px"}}/>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
