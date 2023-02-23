import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import PleaseWaitPage from '@src/components/pages/pleaseWait/pleaseWait';

// TODO: must be complete !!!
const AuthGuard = ({ children }: { children: React.ReactElement }) => {
  // const { isLoggedIn } = useAuth();

  const isLoggedIn = false;
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isLoggedIn) {
        router.push('/login');
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [isLoggedIn]);

  console.log('is user logged in: ' + isLoggedIn);
  if (!isLoggedIn) return <PleaseWaitPage />;

  return children;
};

export default AuthGuard;
