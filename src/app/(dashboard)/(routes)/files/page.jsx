import { UserButton } from "@clerk/nextjs";
import React from "react";

const Files = () => {
  return (
    <div className="h-screen">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Files;
