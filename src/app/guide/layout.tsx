import { Header, Footer } from "@/components";
import { ContextProvider } from "@/components/context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className="container default">
      <Header />
      <main id="page-content" role="main" aria-label="Page Content">
        <ContextProvider>{children}</ContextProvider>
      </main>
      <Footer />
    </div>
  );
}
