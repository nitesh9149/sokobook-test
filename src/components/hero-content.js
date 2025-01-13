import React from "react";
import { cn } from "@/utils";
import Container from "./container";

function HeroContent({ children, className }) {
  return (
    <Container
      className={cn(
        "flex flex-col items-center gap-6 pt-[calc(var(--navbar-height)+60px)] sm:pt-[calc(var(--navbar-height)+90px)]",
        className
      )}
    >
      {children}
    </Container>
  );
}

export default HeroContent;
