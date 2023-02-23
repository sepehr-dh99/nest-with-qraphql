import React from 'react';

import AuthLayout from './auth/auth';
import AuthGuard from './guards/auth/authGuard';
import GuestGuard from './guards/guest/guestGuard';
import { ILayout } from './layout.types';

const Layout = ({ variant = 'guest', children }: ILayout) => {
  switch (variant) {
    case 'guest':
      return (
        <GuestGuard>
          <AuthLayout>{children}</AuthLayout>
        </GuestGuard>
      );

    case 'auth':
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
