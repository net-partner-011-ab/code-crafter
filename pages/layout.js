import "../app/styles/globals.scss";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
