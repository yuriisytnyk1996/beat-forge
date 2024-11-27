import { MaterialIcons } from "@expo/vector-icons";

import { ExploreOption } from "@/features/explore/interfaces/explore-ui.interfaces";

export const exploreOptions: ExploreOption[] = [
  {
    id: '1',
    name: "Audio Cutter",
    icon: (
      <MaterialIcons
        name="content-cut"
        size={24}
        color="white"
      />
    ),
    description: "Trim and cut your audio tracks precisely",
    href: "/",
  },
  {
    id: '2',
    name: "Video Cutter",
    icon: (
      <MaterialIcons
        name="movie-edit"
        size={24}
        color="white"
      />
    ),
    description: "Cut and edit video clips with ease",
    href: "/",
  },
  {
    id: '3',
    name: "Set Melody",
    icon: (
      <MaterialIcons
        name="audiotrack"
        size={24}
        color="white"
      />
    ),
    description: "Create and customize musical melodies",
    href: "/",
  },
  {
    id: '4',
    name: "Merge Audio",
    icon: (
      <MaterialIcons
        name="join-left"
        size={24}
        color="white"
      />
    ),
    description: "Combine multiple audio tracks",
    href: "/",
  },
  {
    id: '5',
    name: "Compress Audio",
    icon: (
      <MaterialIcons
        name="compress"
        size={24}
        color="white"
      />
    ),
    description: "Reduce audio file size without losing quality",
    href: "/",
  },
  {
    id: '6',
    name: "My Studio",
    icon: (
      <MaterialIcons
        name="my-library-music"
        size={24}
        color="white"
      />
    ),
    description: "Your personal audio production workspace",
    href: "/",
  },
];
