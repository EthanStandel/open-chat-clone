import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Button } from "../components/basic/Button";
import { Input } from "../components/basic/Input";
import { useStore } from "../store";
import { styled } from "../style";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useStore(({ setUser }) => setUser);

  return (
    <PageContainer>
      <LoginBox>
        <LoginBoxContent>
          <form
            onSubmit={e => {
              e.preventDefault();
              setUser({ username });
              navigate("/messages");
            }}
          >
            <Input
              label="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button>Login</Button>
          </form>
        </LoginBoxContent>
      </LoginBox>
    </PageContainer>
  );
};

const PageContainer = styled("div", {
  width: "100%",
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginBoxContent = styled("div", {
  padding: "2rem",
});

const LoginBox = styled("div", {
  alignSelf: "center",
  justifySelf: "center",
  width: "min(600px, 100%)",
  backgroundColor: "$bgCard",
  borderRadius: "2em",
});

export default LoginPage;
