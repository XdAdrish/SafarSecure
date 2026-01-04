import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      DashboardLayout
      <div>{children}</div>
    </div>
  );
};

export default layout;
