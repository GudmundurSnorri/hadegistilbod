import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { PacmanLoader } from 'react-spinners'; // Optional loading spinner component

type PRprops = {
  children: React.ReactNode;
};
const ProtectedRoute = ({ children }: PRprops) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'loading') {
    // If session status is loading, display a loading spinner or any other loading indicator
    return <PacmanLoader />;
  }

  if (!session) {
    // If the user is not authenticated, redirect to the sign-in page
    router.push('/signin');
    return null; // Return null to prevent rendering the protected content briefly
  }

  // If the user is authenticated, render the protected content
  return <>{children}</>;
};

export default ProtectedRoute;
