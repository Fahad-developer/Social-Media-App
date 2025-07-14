import { Heart } from "lucide-react";

export default function ProductPost({ post }) {
  return (
    <div className="bg-white p-4 border border-gray-200 rounded mb-4">
      {/* Company Info */}
      <div className="flex items-center mb-2">
        <img src={post.company.logo} className="w-10 h-10 rounded-full mr-2" alt="" />
        <div>
          <h3 className="font-semibold">{post.company.name}</h3>
          <p className="text-xs text-gray-500">{post.date}</p>
        </div>
      </div>
      {/* Description */}
      <p className="mb-2 text-sm">{post.description}</p>
      {/* Product Image */}
      <img src={post.image} className="w-full h-64 object-cover object-center rounded mb-2" alt="" />
      {/* Actions */}
      <div className="flex justify-between items-center">
        <button className="flex items-center gap-1 text-blue-600 hover:underline">
          <Heart className="w-5 h-5" /> Like
        </button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">View Company</button>
      </div>
    </div>
  );
}
