import { createElement } from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
import { menuItem } from "../../routes/Admin.routes";

const { Header, Content, Footer, Sider } = Layout;

const items2 = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: createElement(icon),
  label: `nav ${index + 1}`,
}));

const items: MenuProps["items"] = [
  {
    key: "test key 1",
    label: "Dashboard",
  },
  {
    key: "test key 2",
    label: "profile",
  },
  {
    key: "test key 3",
    label: "users",
  },
  {
    key: "test key 4",
    label: "faculty",
  },
  {
    key: "test key 5",
    label: "manage course",
    children: [
      {
        key: "child key 1",
        label: "add course",
      },
      {
        key: "child key 2",
        label: "delete course",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
          }}
        >
          <h1>ph uni</h1>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          // items={items}
          items={menuItem}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
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
