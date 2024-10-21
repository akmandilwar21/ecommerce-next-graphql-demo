import { GET_PRODUCTS } from "../../lib/queries";
import client from "../../lib/apollo-client";
import Image from "next/image";
import { NodeTypeProps } from "@/lib/types";
import Link from "next/link";
import { extractAndDisplayText } from "../utils";

const ProductsPage = async () => {
  const { data } = await client.query({
    query: GET_PRODUCTS,
  });

  const products = data.products.edges.map(
    ({ node }: { node: NodeTypeProps }) => node
  );

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map((node: NodeTypeProps) => (
          <div key={node.id} className="border p-4 rounded shadow-lg">
            <Link href={`/products/${node.id}`}>
              <Image
                width={350}
                height={350}
                src={node.thumbnail.url}
                alt={node.name}
                className="mb-2"
              />
              <p className="text-gray-600 font-bold text-lg capitalize">
                {node.name}
              </p>
              <p className="text-gray-500">
                {extractAndDisplayText(node.description)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
