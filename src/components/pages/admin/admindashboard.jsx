import { useStateContext } from "../../../context/authRoute";
import AdminMenu from "../../layout/adminmenu";
import Layout from "../../layout/layout.jsx";

const AdminDashboard = () => {
  const {user} = useStateContext();
  return (
    <Layout title={"Ecommerce | Admin-Dashboard"}>
      <div className="container border border-black mx-auto rounded-lg">
        <div className="row grid grid-cols-12 row-span-2 justify-between">
          <div className="col-span-3 row-span-1 border "><AdminMenu/></div>
          <div className="col-span-9  px-10 py-1"><h1>{user?.email}</h1><h1>{user?.id}</h1></div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;