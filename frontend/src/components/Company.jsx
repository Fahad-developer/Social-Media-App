import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllCompanies } from "../redux/company/getAllCompaniesSlice";
import { Follow } from "../redux/company/followCompanySlice";
import { checkFollowing } from "../redux/company/checkFollowingSlice";

function Company() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { companies, error, loading } = useSelector((state) => state.allCompanies || {});
  const checkFollowState = useSelector((state) => state.checkFollowing || {});
  const { isFollowing = false, loading: followLoading } = checkFollowState;

  const [followedCompanies, setFollowedCompanies] = useState({});

  useEffect(() => {
    dispatch(getAllCompanies());
  }, [dispatch]);

  const handleFollow = async (ownerId) => {
    await dispatch(Follow(ownerId));
    const result = await dispatch(checkFollowing(ownerId));

    if (checkFollowing.fulfilled.match(result)) {
      setFollowedCompanies((prev) => ({
        ...prev,
        [ownerId]: result.payload,
      }));
    }
  };

  if (loading) return <p>Loading Companies........</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">All Companies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {companies?.map((company) => {
          const isCompanyFollowing = followedCompanies[company.owner] ?? false;

          return (
            <div
              key={company._id}
              className="bg-white border border-gray-200 p-4 rounded shadow hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`http://localhost:3000/uploads/companies/${company.profile}`}
                  alt={company.name}
                  className="w-12 h-12 rounded-full mr-3 object-cover object-center"
                />
                <h2 className="text-lg font-semibold">{company.name}</h2>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                Total Products: <span className="font-medium">{company.productCount}</span>
              </p>

              <div className="flex gap-2">
                <button
                  className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700"
                  onClick={() => handleFollow(company.owner)}
                  disabled={followLoading}
                >
                  {isCompanyFollowing ? "Unfollow" : "Follow"}
                </button>

                <button
                  className="flex-1 border border-blue-600 text-blue-600 text-sm py-2 px-3 rounded hover:bg-blue-50"
                  onClick={() => navigate(`/profile/${company._id}`)}
                >
                  Visit Profile
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Company;
