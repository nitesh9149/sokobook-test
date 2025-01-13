import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React from "react";

const PARAGRAPH_TYPES = {
  paragraph_md: "paragraph_md",
};

const paragraphVariants = cva("", {
  variants: {
    variant: {
      [PARAGRAPH_TYPES.paragraph_md]: "text-body-md-default",
    },
  },
  defaultVariants: {
    variant: PARAGRAPH_TYPES.paragraph_md,
  },
});

function Paragraph({ className, variant, ...props }) {
  return (
    <p
      className={cn(
        "!text-textSecondary ",
        paragraphVariants({ variant, className })
      )}
      {...props}
    />
  );
}

export { paragraphVariants, Paragraph, PARAGRAPH_TYPES };
