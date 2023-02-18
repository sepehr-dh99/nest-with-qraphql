import React from "react";

import AuthLayout from "./auth/auth";
import AuthGuard from "./guards/auth/AuthGuard";
import GuestGuard from "./guards/guest/GuestGuard";
import { ILayout } from "./Layout.types";

const Layout = ({ variant = "guest", children }: ILayout) => {
  console.log("variant:", variant);

  switch (variant) {
    case "guest":
      return (
        <GuestGuard>
          <AuthLayout>{children}</AuthLayout>
        </GuestGuard>
      );

    case "auth":
      return <AuthGuard>{children}</AuthGuard>;

    default:
      return (
        <GuestGuard>
          <AuthLayout>{children}</AuthLayout>
        </GuestGuard>
      );
  }
};

export default Layout;
