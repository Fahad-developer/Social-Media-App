import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar.jsx';
import { useSelector, useDispatch } from "react-redux";
import { likeProduct } from "../../../backend/controllers/products/product-controller.js";

export default function ProductsComp() {
  const products = useSelector((state) => state.allProducts.products);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLike(productId) {
    dispatch(likeProduct(productId));
  }

  // Function to check if product is liked
  function isProductLiked(productId) {
    if (!user || !user.likedProducts) return false;
    return user.likedProducts.includes(productId);
  }

  return (
    <>
      <Navbar />
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">All Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 p-4 rounded shadow hover:shadow-lg transition"
            >
              {/* Product Image */}
              <img
                src={`http://localhost:3000/uploads/products/${product.productImage}`}
                alt={product.productName}
                className="w-full h-48 object-cover object-center rounded mb-3"
              />

              {/* Product Title */}
              <h2 className="text-lg font-semibold mb-1">{product.productName}</h2>

              {/* Company & Price */}
              <p className="text-sm text-gray-500 mb-1">Company: {product.company.name}</p>
              <p className="text-sm text-gray-700 mb-3">Price: ${product.productPrice}</p>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700"
                  onClick={() => navigate(`/productDetail/${product._id}`)}
                >
                  View Details
                </button>

                <button
                  className={`flex-1 border ${isProductLiked(product._id)
                      ? "bg-green-600 text-white border-green-600"
                      : "text-green-600 border-green-600 hover:bg-green-600 hover:text-white"
                    } text-sm py-2 px-3 rounded`}
                  onClick={() => handleLike(product._id)}
                >
                  {isProductLiked(product._id) ? "Liked" : "Like"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
