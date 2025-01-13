import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Container = forwardRef(({ children, className }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        "w-[90%] sm:w-[95%] xl:max-w-[1200px] 2xl:max-w-[1300px] mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
});

Container.displayName = "Container";

export default Container;
