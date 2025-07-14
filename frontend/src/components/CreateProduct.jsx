import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../redux/products/createProductSlice";

export const CreateProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productImage, setProductImage] = useState(null); // Use null for file


    const formData = {
        productName,
        productDescription,
        productPrice,
        productImage
    }

    // Dispatch your asyncThunk here
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(createProduct(formData))
        navigate('/profile')
    }

    return (
        <div>
            <form
                className="space-y-4 bg-white p-6 rounded shadow max-w-lg mx-auto"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4">Create Product</h2>

                <input
                    type="text"
                    placeholder="Product Name"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />

                <textarea
                    placeholder="Product Description"
                    className="w-full border border-gray-300 p-2 rounded"
                    rows="4"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Product Price"
                    className="w-full border border-gray-300 p-2 rounded"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                />

                <div>
                    <label className="block text-sm mb-1">Product Image</label>
                    <input
                        type="file"
                        className="w-full border border-gray-300 p-2 rounded"
                        onChange={(e) => setProductImage(e.target.files[0])}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};
