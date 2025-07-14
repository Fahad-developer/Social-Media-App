import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyProducts } from "../redux/products/getCompanyProductsSlice";

export default function ProfileContent() {
  const dispatch = useDispatch()

  const products = useSelector((state) => state.companyProducts.products || []);

  console.log(products)

  useEffect(() => {
    dispatch(getCompanyProducts())
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
      {products && products.length > 0 ? (
        products.map((product) => (
          <div key={product._id} className="bg-white border p-3 rounded shadow-sm">
            <img src={`http://localhost:3000/uploads/products/${product.productImage}`} className="w-full h-40 object-cover mb-2 rounded" />
            <h2 className="font-medium">{product.productName}</h2>
            <h3 className="font-medium">{product.productDescription}</h3>
            <p className="text-sm text-gray-500">${product.productPrice}</p>
          </div>
        ))
      ) : (
        <p className="col-span-full text-center text-gray-500">No Products to show...</p>
      )}
    </div>
  );
}
