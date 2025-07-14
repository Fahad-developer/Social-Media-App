import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'

export default function ProductsComp({ products }) {
  const navigate = useNavigate();

  return (
    <>
    <Navbar />
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 p-4 rounded shadow hover:shadow-lg transition"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover object-center rounded mb-3"
            />

            {/* Product Title */}
            <h2 className="text-lg font-semibold mb-1">{product.title}</h2>

            {/* Company & Price */}
            <p className="text-sm text-gray-500 mb-1">Company: {product.company}</p>
            <p className="text-sm text-gray-700 mb-3">Price: ${product.price}</p>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700"
                onClick={() => navigate(`/products/${product.id}`)}
              >
                View Details
              </button>
              <button
                className="flex-1 border border-green-600 text-green-600 text-sm py-2 px-3 rounded  hover:bg-green-600 hover:text-white"
                onClick={() => alert(`Added ${product.title} to cart`)}
              >
                Like
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
