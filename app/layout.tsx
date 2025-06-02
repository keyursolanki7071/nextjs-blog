import Navbar from "@/components/common/Navbar";
import "../styles/global.css";
import Footer from "@/components/common/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">

        {/* Navigation */}
        <Navbar></Navbar>
        {/* End Navigation */}
     

        {children}

        {/* Footer */}
        <Footer></Footer>
        {/* End Footer */}
      </body>
    </html>
  );
}
