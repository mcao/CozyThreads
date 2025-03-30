import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100">
          <Menu
            links={[
              { name: "Homepage", href: "/" },
              { name: "Cart", href: "/cart" },
            ]}
          />
          <Link to="/">
            <Logo logoName={"Comfy Threads"} />
          </Link>
          <div className="navbar-end">
            <Link to="/cart" className="btn-ghost btn-circle btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M16 17a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z"
                />
              </svg>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
