import React from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="navbar bg-primary text-primary-content">
        <button className="btn btn-ghost text-xl">tuTee</button>
      </div>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Next.js Tutorial</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat
                ut assumenda excepturi exercitationem quasi. In
                deleniti eaque aut repudiandae et a id nisi.
              </p>
              <div className="py-8">
              <Link
                href="/users"
                className="text-secondary font-extrabold underline "
              >
                Check out our Users Here
              </Link>
              </div>
              <ProductCard />
              {/* <button className="btn btn-primary">Get Started</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
