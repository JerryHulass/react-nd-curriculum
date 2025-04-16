import React from "react";

export default function Footer() {
  const footer_styling = {
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    marginTop: "20px",
    borderTop: "2px solid green",
  };
  return (
    <footer style={footer_styling}>
      <p>© 2025 Space Adventure Blog. All rights reserved.</p>
    </footer>
  );
}
