import Nav from "./nav";

const Layout = ({ children, categories, seo }) => (
  <div className="max-w-screen-3xl mx-auto my-0">
    <main>
      <Nav categories={categories} />
      {children}
    </main>
  </div>
);

export default Layout;
