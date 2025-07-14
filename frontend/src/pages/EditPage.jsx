import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCompany } from "../redux/company/createCompanySlice.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



import Navbar from "../components/Navbar.jsx";


export default function EditPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const company = useSelector((state) => state.createCompany.company)


  const isRegistered = !!company  // convert to boolean true / false

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [contact, setContact] = useState("")
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [address, setAddress] = useState("")
  const [profile, setProfile] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append("name", name)
    formData.append("description", description)
    formData.append("contact", contact)
    formData.append("email", email)
    formData.append("city", city)
    formData.append("address", address)
    formData.append("profile", profile)

    dispatch(createCompany(formData))
    navigate('/home')
  }


  return (
    <>
      <Navbar />
      <div className="bg-white p-6 max-w-xl mx-auto my-8 border border-gray-200 rounded shadow-sm">
        <h2 className="text-xl font-bold mb-4">{isRegistered ? "Update Company Info" : "Register Your Company"}</h2>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input className="w-full border p-2 rounded" placeholder="Company Name" name="companyName" value={name} onChange={(e) => setName(e.target.value)} />

          <textarea className="w-full border p-2 rounded" placeholder="Tell us About your Company." type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>

          <input className="w-full border p-2 rounded" placeholder="Enter your Phone Number" name="phone" value={contact} onChange={(e) => setContact(e.target.value)} />

          <input className="w-full border p-2 rounded" placeholder="Enter your Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

          <input className="w-full border p-2 rounded" placeholder="Location (City, Country)" name="city" value={city} onChange={(e) => setCity(e.target.value)} />

          <input className="w-full border p-2 rounded" placeholder="Enter you Address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />

          <div>
            <label className="block mb-1 text-sm">Company Logo:</label>
            <input className="w-full" type="file" name="profile" onChange={(e) => setProfile(e.target.files[0])} />
          </div>

          <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded mt-2 hover:bg-blue-700">{isRegistered ? "Update Company" : "Register Company"}</button>
        </form>
      </div>
    </>
  );
}
