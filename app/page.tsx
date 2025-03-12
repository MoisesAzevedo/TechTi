import type { Metadata } from "next";
import HomePage from "./pages/home/page";

export const metadata: Metadata = {
  title: "TechTi Tecnologia - Home"
};

export default function IndexPage() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
