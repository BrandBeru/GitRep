import "@styles/globals.css";

import MainLayout from "@layout/MainLayout";
import { ThemeProvider } from "@material-tailwind/react";
import { ProviderAuth } from "@hooks/useAuth";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return (
    <>
      <ThemeProvider>
        <ProviderAuth>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </ProviderAuth>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
