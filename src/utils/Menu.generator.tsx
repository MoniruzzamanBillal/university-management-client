import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types";

export const MenuGenerator = (items: TUserPath[], role: string) => {
  const menuItem = items.reduce((acc: TSidebarItem[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}> {item.name} </NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name!,
        label: item.name,
        children: item.children.map((child) => {
          return {
            key: child.name,
            label: (
              <NavLink to={`/${role}/${child.path}`}> {child.name} </NavLink>
            ),
          };
        }),
      });
    }

    return acc;
  }, []);

  return menuItem;
};
