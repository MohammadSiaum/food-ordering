import {AppProvider} from '../components/AppContext';
import { Inter, Roboto, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Toaster } from "react-hot-toast";
// import "@uploadthing/react/styles.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Pizza guru",
  description: "Everything is better with a Pizza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={poppins.className}>
        <main className="max-w-7xl mx-auto py-2">
          <AppProvider>
            <Header />
            <Toaster /> 
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
