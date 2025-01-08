import { Link, useLocation } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import {
  Building2,
  Heart,
  LayoutDashboard,
  MessageSquare,
  Bell,
  Search,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Saved Search",
    icon: Search,
    href: "/saved-search",
  },
  {
    label: "Chats",
    icon: MessageSquare,
    href: "/chats",
  },
  {
    label: "Properties",
    icon: Building2,
    href: "/properties",
  },
  {
    label: "My Properties",
    icon: Building2,
    href: "/my-properties",
  },
  {
    label: "Notifications",
    icon: Bell,
    href: "/notifications",
  },
];

export function Sidebar() {
  const location = useLocation(); // Get current location

  return (
    <div className="flex h-full flex-col gap-4 bg-white p-4">
      <nav className="text-center grid gap-1">
        {routes.map((route) => {
          const isActive = location.pathname === route.href; // Check if current path matches route href
          return (
            <Link
              key={route.href}
              to={route.href}
              className={`flex items-center gap-3 rounded-l-lg px-4 py-3 transition-all hover:text-gray-900 ${
                isActive
                  ? "bg-[#1E3FB41A] text-[#1E3FB4] border-r-4 border-[#1E3FB4]"
                  : "text-gray-500"
              }`}
            >
              <route.icon className="h-4 w-4" />
              {route.label}
            </Link>
          );
        })}
      </nav>
      <div className="m-auto flex justify-center items-end h-screen w-full float-end">
        <button className="bg-[#1E3FB4] flex w-1/1 justify-center items-center gap-2 rounded-lg border px-3 py-3 text-white">
          <MdContactPhone className="h-8 w-8" />
          Contact Support
        </button>
      </div>
    </div>
  );
}
