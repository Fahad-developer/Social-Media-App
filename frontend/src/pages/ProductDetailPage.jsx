import { useParams } from "react-router-dom";
import { getSpecificProductDetail } from "../redux/products/getSpecificProductSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";

const ProductDetailPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const { productDetail, loading, error } = useSelector((state) => state.ProductDetails);
    const product = productDetail?.product;


    useEffect(() => {
        if (id) {
            dispatch(getSpecificProductDetail(id));
        }
    }, [dispatch, id]);

    if (loading) return <p className="text-center mt-10 text-xl font-medium">Loading...</p>;
    if (error) return <p className="text-center text-red-500 mt-10 text-lg">Error: {error}</p>;
    if (!product) return <p className="text-center mt-10 text-gray-500">No product found.</p>;

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-6">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

                    {/* Product Image */}
                    <div className="bg-gray-100 flex items-center justify-center p-10 transition-all hover:scale-105">
                        <img
                            src={`http://localhost:3000/uploads/products/${product.productImage}`}
                            alt={product.productName}
                            className="object-contain max-h-[450px] rounded-xl shadow"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="p-10 flex flex-col justify-center">
                        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">{product.productName}</h1>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">{product.productDescription}</p>

                        <div className="text-4xl font-bold text-green-600 mb-6">${product.productPrice}</div>

                        {product.company && (
                            <div className="inline-block bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full shadow-sm">
                                Company ID: {product.company}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetailPage;
