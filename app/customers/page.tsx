import { Metadata } from "next";
import Customers from "@/containers/Customers";

export const metadata: Metadata = {
  title: "Customers | Mailroom",
  description: "",
};

export default function Page() {
  return <Customers />;
}
