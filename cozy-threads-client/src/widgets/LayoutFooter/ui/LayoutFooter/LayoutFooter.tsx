import { FC } from "react";

const LayoutFooter: FC = () => {
  return (
    <>
      <footer className="footer bg-base-300 p-10 text-base-content">
        <div>
          <span className="footer-title">Cozy Threads</span>
          <p>Ethically made apparel for everyday comfort.</p>
        </div>
        <div>
          <span className="footer-title">Links</span>
          <a className="link-hover link">Home</a>
          <a className="link-hover link">About</a>
          <a className="link-hover link">Contact</a>
        </div>
      </footer>
    </>
  );
};

export default LayoutFooter;
