import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ScrollToTop from "@/components/ScrollToTop";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
