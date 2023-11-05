import { Metadata } from "next";
import Login from "@/containers/Login";

export const metadata: Metadata = {
  title: "Login | Mailroom",
  description: "",
};

export default function Page() {
  return <Login />;
}
