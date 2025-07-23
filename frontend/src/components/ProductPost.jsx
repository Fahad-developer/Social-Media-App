import { Heart } from "lucide-react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/products/getAllProductsSlice";

export default function ProductPost() {
  const dispatch = useDispatch()

  const { products, loading, error } = useSelector((state) => state.allProducts);

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch])

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="space-y-4">
      {products && products.map((post) => (
        <div key={post._id} className="bg-white p-4 border border-gray-200 rounded mb-4">
          {/* Company Info */}
          <div className="flex items-center mb-2">
            <img src={`http://localhost:3000/uploads/companies/${post.company.profile}`} className="w-10 h-10 rounded-full mr-2" alt="Company Logo" />
            <div>
              <h3 className="font-semibold">{post.company.name}</h3>
              <p className="text-xs text-gray-500">{post.createdAt}</p>
            </div>
          </div>
          {/* Description */}
          <p className="mb-2 text-sm">{post.productDescription}</p>
          {/* Product Image */}
          <img src={`http://localhost:3000/uploads/products/${post.productImage}`} className="w-full h-64 object-cover object-center rounded mb-2" alt="Product" />
          {/* Actions */}
          <div className="flex justify-between items-center">
            <button className="flex items-center gap-1 text-blue-600 hover:underline">
              <Heart className="w-5 h-5" /> Like
            </button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
              View Company
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
