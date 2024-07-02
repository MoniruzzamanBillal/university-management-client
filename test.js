const { NavLink } = require("react-router-dom");

const adminPath = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: " <AdminDashboard />",
  },
  {
    name: "User management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: " <CreateAdmin /> ",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty /> ",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: " <CreateStudent />",
      },
    ],
  },
];

const newArr = adminPath.reduce((acc, item) => {
  if (item.path && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }

  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  //   acc.push(item);

  return acc;
}, []);

const menu = adminPath.reduce((acc, item) => {
  if (item.name && item.path) {
    acc.push({
      key: item.name,
      label: <NavLink to={`/admin/${item.path}`}> {item.name} </NavLink>,
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => {
        return {
          key: child.name,
          label: <NavLink to={`/admin/${child.path}`}> {child.name} </NavLink>,
        };
      }),
    });
  }

  return acc;
}, []);

console.log(menu);
console.log(JSON.stringify(menu, null, 2));
