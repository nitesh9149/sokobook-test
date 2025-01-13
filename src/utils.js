import clsx from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        "text-12",
        "text-14",
        "text-16",
        "text-18",
        "text-20",
        "text-24",
        "text-32",
        "text-36",
      ],
    },
  },
});

function cn(...input) {
  return customTwMerge(clsx(input));
}

export { cn };
