
import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React from "react";

const HEADING_TYPES = {
  heading5xl: "heading5xl",
  heading4xl: "heading4xl",
  heading3xl: "heading3xl",
  heading2xl: "heading2xl",
  headingxl: "headingxl",
  headinglg: "headinglg",
};

const headingVariants = cva("font-heading", {
  variants: {
    variant: {
      [HEADING_TYPES.heading5xl]:
        "text-heading-3xl sm:text-heading-4xl lg:text-heading-5xl",
      [HEADING_TYPES.heading4xl]:
        "text-heading-2xl sm:text-heading-3xl lg:text-heading-4xl",
      [HEADING_TYPES.heading3xl]:
        "text-heading-xl sm:text-heading-2xl lg:text-heading-3xl",
      [HEADING_TYPES.heading2xl]:
        "text-heading-lg sm:text-heading-xl lg:text-heading-2xl",
      [HEADING_TYPES.headingxl]: "text-heading-lg sm:text-heading-xl",
      [HEADING_TYPES.headinglg]: "text-heading-md lg:text-heading-lg",
    },
  },
  defaultVariants: {
    variant: HEADING_TYPES.heading3xl,
  },
});

function Heading({ as: Tag = "h1", variant, className, ...props }) {
  return (
    <Tag
      className={cn("text-center", headingVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Heading, headingVariants, HEADING_TYPES };
