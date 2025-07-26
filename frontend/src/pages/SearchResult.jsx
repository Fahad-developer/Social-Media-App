import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const SearchResult = () => {
    const companies = useSelector((state) => state.searchCompanies?.companies)
    const navigate = useNavigate()

    return (
        <>
            <Navbar />
            <div className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
                {companies?.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {companies.map((company) => (
                            <div
                                key={company._id}
                                className="bg-white shadow-md rounded-lg p-4 border"
                            >
                                <div className="flex items-center gap-4 mb-3" onClick={() => {navigate()}}>
                                    <img
                                        src={`http://localhost:3000/uploads/companies/${company?.profile}`}
                                        alt="Company"
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-xl font-semibold">{company.name}</h4>
                                        <p className="text-sm text-gray-500">{company.email}</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-gray-700 mt-1">{company.description}</p>
                                    <p className="text-sm text-gray-500 mt-1">
                                        {company.city}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No companies found.</p>
                )}
            </div>
        </>
    )
}

export default SearchResult
