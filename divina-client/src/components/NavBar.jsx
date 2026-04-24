import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-[#003366] bg-[#003366] text-[#FFD700]'
      : 'border-transparent text-blue-600 hover:border-[#003366] hover:bg-blue-100 hover:text-[#003366]',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-[#003366] bg-blue-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-[#003366] bg-white object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-[#003366]">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link 
            to="/auth/signin"
            className="rounded-full border-2 border-[#003366] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#003366] transition hover:bg-blue-100"
            aria-label="Sign in to your account"
          >
            Sign In
          </Link>
          <Link 
            to="/auth/signup"
            className="rounded-full border-2 border-[#003366] bg-[#003366] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#FFD700] transition hover:bg-blue-800"
            aria-label="Create a new account"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
