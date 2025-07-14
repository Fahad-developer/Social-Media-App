import Company from "../components/Company.jsx"
import Navbar from '../components/Navbar.jsx'

import companies from "../data/companies.js"

const Companies = () => {
  return (
    <>
      <Navbar />
      <Company companies={companies} />
    </>
  )
}

export default Companies