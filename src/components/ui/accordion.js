"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import * as React from "react";

import { cn } from "@/utils";
import { MinusIcon, PlusIcon } from "../icons";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "border border-borderDefault rounded-xl p-4 lg:px-5 lg:py-4 h-auto",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 gap-2 group items-center text-left justify-between text-body-md-semibold lg:text-heading-md transition-all ",
          className
        )}
        {...props}
      >
        {children}
        <span className="group-data-[state=open]:hidden group-data-[state=closed]:block ">
          <PlusIcon className="plus-icon size-8 shrink-0 transition-transform duration-200" />
        </span>
        <span className="group-data-[state=closed]:hidden group-data-[state=open]:block">
          <MinusIcon className="minus-icon size-7 shrink-0 transition-transform duration-200" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={cn(
        "overflow-hidden mt-3 sm:w-[90%] text-left !text-textSecondary text-body-sm-default lg:text-body-md-default transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div
        className={cn("pb-4 pt-0")}
        dangerouslySetInnerHTML={{
          __html: children,
        }}
      ></div>
    </AccordionPrimitive.Content>
  )
);

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
