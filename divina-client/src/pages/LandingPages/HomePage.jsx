import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import banner from '../../assets/img/nu_bulldogex_banner.jpg';
import nuEssentials from '../../assets/img/NU Essentials.jpg';
import nuAccessories from '../../assets/img/NU Accesories.jpg';
import nuApparel from '../../assets/img/NU Apparel.jpg';

const HomePage = () => {
    return (
        <div className="flex w-full flex-col gap-6">
            <section className="relative min-h-[28rem] overflow-hidden border-y-2 border-[#003366] bg-[#003366] px-4 py-10 sm:px-6 lg:px-8">
                <img
                    src={banner}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#003366]/45" />

                <div className="relative z-10 flex min-h-[22rem] items-start justify-end text-right sm:min-h-[24rem]">
                    <div className="max-w-xl">
                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-100">
                            Campus Marketplace
                        </p>
                        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                            Welcome to BulldogEx Shop
                        </h1>
                        <p className="mt-4 text-sm leading-7 text-blue-50 sm:text-base">
                            Explore campus uniforms, student essentials, and school merch in one
                            quick storefront.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-end gap-3">
                            <Button to="/products">
                                Shop Now
                            </Button>
                            <Button to="/about" variant="primary">
                                About Store
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#003366] bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#003366]">
                        Store Overview
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#003366]">Quick shopping blocks</h2>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-3xl border-2 border-[#003366] bg-blue-100 p-5">
                        <p className="text-2xl font-bold text-[#003366]">08</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                            Products
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#003366] bg-blue-100 p-5">
                        <p className="text-2xl font-bold text-[#003366]">06</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                            Categories
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#003366] bg-blue-100 p-5">
                        <p className="text-2xl font-bold text-[#003366]">24</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                            Orders
                        </p>
                    </div>
                    <div className="rounded-3xl border-2 border-[#003366] bg-blue-100 p-5">
                        <p className="text-2xl font-bold text-[#003366]">03</p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-700">
                            Pickup Slots
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-2 border-[#003366] bg-blue-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
                <div className="mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#003366]">
                        Shop Sections
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#003366]">Simple store cards</h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                    <article className="rounded-3xl border-2 border-[#003366] bg-blue-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-blue-50 overflow-hidden">
                            <img
                                src={nuEssentials}
                                alt="NU Essentials category"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#003366]">Daily Essentials</h3>
                        <p className="mt-3 text-sm leading-6 text-blue-700">
                            Bags, tumblers, lanyards, and items used every school day.
                        </p>
                        <Button to="/products" className="mt-4">View Products</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-[#003366] bg-blue-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-blue-50 overflow-hidden">
                            <img
                                src={nuAccessories}
                                alt="NU Accessories category"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#003366]">Accesories</h3>
                        <p className="mt-3 text-sm leading-6 text-blue-700">
                            Pins, keychains, and other accessories for student aesthetics.
                        </p>
                        <Button to="/products" className="mt-4">Shop Supplies</Button>
                    </article>

                    <article className="rounded-3xl border-2 border-[#003366] bg-blue-100 p-4">
                        <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-blue-50 overflow-hidden">
                            <img
                                src={nuApparel}
                                alt="NU Apparel category"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-[#003366]">Campus Apparel</h3>
                        <p className="mt-3 text-sm leading-6 text-blue-700">
                            Comfortable pieces for class days, commute days, and weekends.
                        </p>
                        <Button to="/products" className="mt-4">
                            View Apparel
                        </Button>
                    </article>
                </div>
            </section>

            {/* Authentication CTA Section */}
            <section className="border-y-2 border-[#003366] bg-gradient-to-r from-[#003366] to-blue-800 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-yellow-100">
                        Get Started
                    </p>
                    <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
                        Join the Campus Community
                    </h2>
                    <p className="mt-4 text-lg leading-7 text-blue-100">
                        Create an account to track orders, save your favorites, and get exclusive campus deals.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                        <Link
                            to="/auth/signin"
                            className="rounded-full border-2 border-white bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#003366] transition hover:bg-blue-50"
                            aria-label="Sign in to your account"
                        >
                            Sign In
                        </Link>
                        <Link
                            to="/auth/signup"
                            className="rounded-full border-2 border-[#FFD700] bg-[#FFD700] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#003366] transition hover:bg-yellow-400"
                            aria-label="Create a new account"
                        >
                            Create Account
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
