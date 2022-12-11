import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { CgSpinner } from 'react-icons/cg';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth, _auth } from '../config/firebase';

const withAuth: any = (Page: any) => {
  const Auth = (props : any) => {
    const { replace } = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      const unsubscribe = _auth.onAuthStateChanged(auth, async (user) => {
        if (!user?.uid) {
          _auth.signOut(auth);
          console.log('auth state logged out');
          replace('/login');
        } else {
          console.log('auth state logged in');
          setLoading(false);
        } 
      });

      return () => unsubscribe();
    }, []);

    return !loading ? (
      <Page {...props} />
    ) : (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <CgSpinner size={30} className="animate-spin" />
      </div>
    );
  };

  return Auth;
};

export default withAuth;
