import { signOut } from "next-auth/react";
import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import { HiArrowLeftOnRectangle, HiUsers } from "react-icons/hi2";
import useConversation from "./useCOnversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        lable: "Chat",
        href: "/converstions",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        lable: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        lsbel: "Logout",
        href: "#",
        active: () => signOut(),
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
