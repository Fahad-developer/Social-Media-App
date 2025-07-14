import { useDispatch, useSelector } from "react-redux";
import { profileStatistics } from "../redux/company/profileStatisticsSlice";
import { useEffect } from "react";

export default function ProfileStats() {
  const dispatch = useDispatch();

  const { statistics, loading } = useSelector((state) => state.profileStatistics);

  useEffect(() => {
    dispatch(profileStatistics());
  }, []);

  if (loading) {
    return <div className="text-center mt-4 text-gray-500">Loading stats...</div>;
  }

  if (!statistics) {
    return <div className="text-center mt-4 text-red-500">No stats found.</div>;
  }

  return (
    <div className="flex justify-center gap-8 mt-12 text-center">
      <div>
        <p className="text-xl font-bold">{statistics.productsCount || "0"}</p>
        <span className="text-sm text-gray-500">Products</span>
      </div>
      <div>
        <p className="text-xl font-bold">{statistics.followersCount || "0"}</p>
        <span className="text-sm text-gray-500">Followers</span>
      </div>
      <div>
        <p className="text-xl font-bold">{statistics.followingCount || "0"}</p>
        <span className="text-sm text-gray-500">Following</span>
      </div>
    </div>
  );
}
