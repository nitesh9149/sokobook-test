import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "group inline-flex gap-3.5 items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primaryMain !text-white hover:bg-primaryMain/90 text-body-sm-semibold 2xl:text-body-md-semibold ",
        outline:
          "border border-borderDefault bg-transparent text-body-sm-semibold 2xl:text-body-md-semibold",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 py-3 sm:py-2.5 2xl:py-3",
        sm: "h-10 rounded-lg px-4 ",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  (
    { className, variant, size, asChild = false, showRightArrowIcon, ...props },
    ref
  ) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
