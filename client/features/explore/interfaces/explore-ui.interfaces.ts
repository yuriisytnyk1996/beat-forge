import { ReactNode } from "react";
import { Href } from "expo-router";

export interface ExploreOption {
  id: string;
  name: string;
  icon: ReactNode;
  description: string;
  href: Href;
}
