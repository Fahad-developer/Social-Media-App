import Navbar from "../components/Navbar"
import SuggestedCompanies from "../components/SuggestedCompanies.jsx"
import SuggestedProducts from "../components/SuggestedProducts.jsx"
import ProductPost from "../components/ProductPost.jsx"

// Imported Data
import companies from '../data/companies.js'
import products from '../data/products.js'
import posts from '../data/posts.js'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-gray-50">
        {/* Left Sidebar */}
        <div className="w-1/4 hidden lg:block">
          <SuggestedCompanies companies={companies} />
        </div>

        {/* Feed */}
        <main className="flex-1 p-4 space-y-4 overflow-y-auto">
            <ProductPost />
        </main>

        {/* Right Sidebar */}
        <div className="w-1/4 hidden lg:block">
          <SuggestedProducts products={products} />
        </div>
      </div>
    </>
  )
}

export default Home