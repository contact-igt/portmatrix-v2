import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Shared shell for every internal page (everything except `/`, which
// composes its own full-bleed section stack directly in app/page.jsx).
// pt-[68px] clears the fixed header — internal pages then add their own
// section padding on top of that, same convention as the homepage.
export default function PagesLayout({ children }) {
  return (
    <>
      <Header />
      <main className="relative pt-[68px]">{children}</main>
      <Footer />
    </>
  );
}
