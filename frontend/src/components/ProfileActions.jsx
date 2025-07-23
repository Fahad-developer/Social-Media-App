import { useNavigate } from "react-router-dom";
import { useOwner } from "../hook/useOwner";

export default function ProfileActions() {
  const isOwner = useOwner()
  const navigate = useNavigate()

  console.log(isOwner)
  return (
    <div className="flex justify-center gap-4 mt-4">
      {isOwner ? (
        <>
          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" onClick={() => navigate('/edit')}>Edit Profile</button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" onClick={() => navigate('/createProduct')}>Add Products</button>
        </>
      ) : (
        <>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Follow</button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded">Contact</button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer" onClick={() => navigate('/edit')}>Edit Profile</button>
        </>
      )}
    </div>
  );
}
