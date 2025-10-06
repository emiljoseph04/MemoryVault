import React from "react";

function Footer() {
  return (
    <footer
      className="bg-dark text-light py-3 text-center"
      style={{position: "fixed",bottom: 0,left: 0,width: "100%",zIndex: 1000,
      }}
    >
      <p className="mb-0">© 2025 MemoryVault | A Digital Time Capsule</p>
    </footer>
  );
}

export default Footer;
