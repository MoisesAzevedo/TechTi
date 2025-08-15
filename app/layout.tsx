import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/globals.css";
import styles from "./styles/layout.module.scss";
import { Navigation } from "./components/Header/NavigationMenu";
import Footer from "./components/Footer";


interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="pt-BR">
        <body>
          {/* <Header /> */}
          <Navigation />

          <main className={styles.main}>{children}</main>
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}
