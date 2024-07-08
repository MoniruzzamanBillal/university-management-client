import { Button, Layout } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hook";
import { logout } from "../../redux/features/auth/auth.slicer";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // ! logout function
  const handleLogout = () => {
    console.log("logout click !!!");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Layout
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }}>
          <Button onClick={() => handleLogout()}>Log out!</Button>
        </Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
