import Layout from "../layout";
import AuthForm from "../../../components/AuthForm";

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <AuthForm
        title="Login to Clearpath"
        subTitle="Welcome back, you can enter your email or login with your google
        account"
        buttonText="Sign in with Google"
        redirect="/auth/signup"
      />
    </Layout>
  );
};

export default LoginPage;