import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t-2 border-[#003366] bg-[#003366] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-white sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-lg font-bold">BulldogEx Shop</p>
          <p className="mt-1 text-sm text-blue-100">Campus essentials, simple ordering.</p>
        </div>
        <div className="flex gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFD700]">
          <Link to="/products" className="hover:text-yellow-300 transition">Products</Link>
          <span>|</span>
          <Link to="/products" className="hover:text-yellow-300 transition">Cart</Link>
          <span>|</span>
          <Link to="/products" className="hover:text-yellow-300 transition">Pickup</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
