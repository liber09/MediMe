import { useRouter } from 'next/router';
import { useEffect, ReactNode } from 'react';
import { useAuth } from '@/app/_functions/AuthContext';

interface AuthenticatedComponentProps {
    children: ReactNode;
  }
  
  const AuthenticatedComponent: React.FC<AuthenticatedComponentProps> = ({ children }) => {
    const { user } = useAuth();
    const router = useRouter();
  
    useEffect(() => {
      if (!user) {
        // Redirect to login page if user is not authenticated
        router.push('/login');
      }
    }, [user, router]);
  
    return <>{user && children}</>;
  };
  
  export default AuthenticatedComponent;