import { MainRoutes } from "@/shared/enums/routes.enums";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { NavigationOption } from "@/shared/interfaces/navigation.interfaces";

export const tabsNavigationConfig: NavigationOption[] = [
  {
    id: "1",
    title: "Explore",
    href: MainRoutes.EXPLORE,
    icon: (
      <MaterialIcons
        name="explore"
        size={24}
        color="white"
      />
    ),
  },
  {
    id: "2",
    title: "Extract",
    href: MainRoutes.EXTRACT,
    icon: (
      <MaterialIcons
        name="downloading"
        size={24}
        color="white"
      />
    ),
  },
  {
    id: "3",
    title: "Profile",
    href: MainRoutes.PROFILE,
    icon: (
      <FontAwesome
        name="user-circle"
        size={24}
        color="white"
      />
    ),
  },
];
