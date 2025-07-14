import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { viewCompany } from "../redux/company/viewUserCompanySlice";

export default function ProfileHeader() {
  const dispatch = useDispatch();
  const company = useSelector((state) => state.viewCompany.company);

  useEffect(() => {
    dispatch(viewCompany());
  }, [dispatch]);

  if (!company) {
    return (
      <div className="text-center py-8 text-gray-500">Loading profile...</div>
    );
  }

  return (
    <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-700">
      <img
        src={`http://localhost:3000/uploads/companies/${company.profile}`}
        alt={company.name}
        className="absolute left-1/2 -translate-x-1/2 bottom-[-50px] w-28 h-28 rounded-full border-4 border-white object-cover"
      />

      <div className="pt-20 text-center text-white">
        <h1 className="text-2xl font-bold">{company.name}</h1>
        <p className="text-sm opacity-80">
          {company.description || "No bio available"}
        </p>
      </div>
    </div>
  );
}
