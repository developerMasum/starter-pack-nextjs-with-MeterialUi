
import React from "react";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <Navbar /> */}
      <p>This is navbar</p>
      <div className="min-h-screen">{children}</div>
     <p>This is footer</p>
      {/* <Footer /> */}
    </>
  );
};

export default CommonLayout;
