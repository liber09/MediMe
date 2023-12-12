import AuthenticatedComponent from "@/app/_components/authenticatedComponent/AuthenticatedComponent";
import { GetServerSideProps } from 'next';

const Account = () => {
  return (
    <AuthenticatedComponent>
      <div>
        <h1>Kontosida</h1>
        {/* Your content here */}
      </div>
    </AuthenticatedComponent>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Perform authentication logic here
  // For example, check if the user is authenticated based on cookies, tokens, etc.
  const authenticated = true; // Replace this with your actual authentication logic

  // If not authenticated, you can redirect to the login page
  if (!authenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  // If authenticated, proceed with rendering the page
  return {
    props: {}, // This object will be passed to the page component as props
  };
};

export default Account;
