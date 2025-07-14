import { useNavigate } from "react-router-dom";


export default function Unauthorized() {
    const navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault()
        navigate('/login')
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <h1 className="text-4xl font-bold text-red-500 mb-4">401 (Unauthorized)</h1>
            <p className="text-2xl text-gray-700 mb-2">Unauthorized Access Detected.</p>
            <p className="text-gray-500 mb-6 text-center">
                You are not Allowed to View this Resource Kindly Contact Administration Department.
            </p>

            <button className="bg-blue-700 h-[40px] w-[120px] text-white rounded hover:bg-blue-800 transition hover:h-[50px] hover:w-[130px]" onClick={handleClick}>Back to Login</button>
        </div>
    );
}
