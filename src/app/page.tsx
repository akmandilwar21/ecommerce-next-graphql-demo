import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Welcome to My E-Commerce Store
      </h1>
      <Link
        href="/products"
        className="bg-gray-600 text-white px-4 py-2 rounded"
      >
        Browse Products
      </Link>
    </div>
  );
}
