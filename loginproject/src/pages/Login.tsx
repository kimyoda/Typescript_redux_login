import styled from "styled-components";
import Button from "../component/button/Button";

const LoginBoxContainer = styled.div``;

const LoginContainer = styled.div``;

const Login = () => {
  const handleLogin = () => {};

  return (
    <LoginContainer>
      <LoginBoxContainer>
        <Button text="Login" onClick={handleLogin} />
      </LoginBoxContainer>
    </LoginContainer>
  );
};

export default Login;
