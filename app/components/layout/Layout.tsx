import { Header, Footer } from ".";

type ILayout = {
  children: React.ReactNode;
};

export default function Layout({ children }: ILayout) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main role="main" id="mainContent" className="flex-grow">
          {children}
        </main>
      </div>
    <Footer />
    </>
  );
}