import { useNavigate } from "react-router-dom";

function Company({ companies }) {
  const navigate = useNavigate();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">All Companies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="bg-white border border-gray-200 p-4 rounded shadow hover:shadow-lg transition"
          >
            {/* Logo & Name */}
            <div className="flex items-center mb-4">
              <img
                src={company.logo}
                alt={company.name}
                className="w-12 h-12 rounded-full mr-3 object-cover object-center"
              />
              <h2 className="text-lg font-semibold">{company.name}</h2>
            </div>

            {/* Total Products */}
            <p className="text-sm text-gray-600 mb-4">
              Total Products: <span className="font-medium">{company.totalProducts}</span>
            </p>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700"
                onClick={() => alert(`Followed ${company.name}`)}
              >
                Follow
              </button>
              <button
                className="flex-1 border border-blue-600 text-blue-600 text-sm py-2 px-3 rounded hover:bg-blue-50"
                onClick={() => navigate(`/profile/${company.id}`)}
              >
                Visit Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Company