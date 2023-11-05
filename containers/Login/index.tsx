"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  LoginText,
  LoginFormContainer,
  ImageContainer,
  LogoContainer,
  Container,
  ContentContainer,
  InputContainer,
} from "./styles/main.styles";
import CustomInput from "../../components/Input";
import CustomButton from "@/components/Button";
import vectorArt from "@/public/login/vectorArt.png";
import logo from "@/public/mailroomLogo.svg";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      router.push("/account/create-account");
    } catch (err: unknown) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <ContentContainer>
        <LogoContainer>
          <Image src={logo} alt="logo" />
        </LogoContainer>
        <LoginFormContainer>
          <LoginText>Log in to your account</LoginText>
          <form onSubmit={onLogin}>
            <InputContainer>
              <CustomInput
                variant="login"
                type="email"
                label="Username"
                placeholder="Username"
                htmlFor="login_username"
                id="login_username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <CustomInput
                variant="login"
                type="password"
                label="Password"
                placeholder="Password"
                htmlFor="login_password"
                id="login_password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputContainer>
            <CustomButton
              variant="login"
              type="submit"
              disabled={loading}
              loading={loading || undefined}
            >
              Login
            </CustomButton>
          </form>
        </LoginFormContainer>
      </ContentContainer>
      <ImageContainer>
        <Image src={vectorArt} alt="" />
      </ImageContainer>
    </Container>
  );
}
