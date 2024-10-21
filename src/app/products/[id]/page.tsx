import { GET_PRODUCT } from "../../../lib/queries";
import client from "../../../lib/apollo-client";
import Image from "next/image";
import { extractAndDisplayText } from "@/app/utils";

export async function getProductData(id: string) {
  const { data } = await client.query({
    query: GET_PRODUCT,
    variables: { id: decodeURIComponent(id) },
  });

  return data.product;
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await getProductData(params.id);
  if (!product) {
    return (
      <div className="w-screen h-screen flex gap-2 items-center justify-center">
        <p>Error loading product</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <p className="text-4xl font-medium text-gray-600 tracking-wide uppercase mb-4">
        {product.name}
      </p>
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
        />
        <div>
          <div className="flex flex-row">
            <div className="bg-gray-400 p-1 rounded">
              <p className="text-white text-sm">
                ID: <span className="text-xs">{product.id}</span>
              </p>
            </div>
          </div>
          <p className="text-md text-gray-600 mt-2 mb-4">
            {extractAndDisplayText(product.description) || ""}
          </p>
          <p className="text-sm text-gray-500 capitalize">
            Brand: {product?.brand || "NA"}
          </p>
          <p className="text-sm text-gray-500 capitalize">
            Category: {product.category.name || ""}
          </p>

          <div className="text-sm text-gray-500 capitalize">
            <span className="me-2 text-yellow-500">
              Price: $
              <span className="text-lg font-bold">
                {product.pricing.priceRange.start.gross.amount || ""}
              </span>
            </span>
            |
            <span className="ms-2 text-green-500">
              Discount: {product.pricing.discount || 0}%
            </span>
          </div>

          <p className="text-sm text-gray-500 capitalize">Return Policy: NA</p>
          <p className="text-sm text-gray-500 capitalize">Warranty: 1 Year</p>

          <p className="text-sm text-gray-500 capitalize">
            Availability:{" "}
            {product.isAvailableForPurchase ? (
              <span className="text-green-500">In Stock</span>
            ) : (
              <span className="text-red-500">Out of Stock</span>
            )}
          </p>

          <p className="text-sm text-gray-500">
            Weight: {product.weight.value}{" "}
            <span className="lowercase">{product.weight.unit}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
