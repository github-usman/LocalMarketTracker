import { Link } from "react-router-dom";
import { MdOutlineSmsFailed } from "react-icons/md";
import Header from "../../layouts/Header";

function PageNotFound() {
  return (
    <main>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <MdOutlineSmsFailed size={50} color="green" />
        <h3>404</h3>
        <h1>Page not found, </h1>
        <p>Sorry,<strong> We are developing</strong> this page please visit after some time.</p>
        <div>
          <Link to="/">Go back home</Link>
        </div>
      </div>
    </main>
  );
}

export default PageNotFound;
