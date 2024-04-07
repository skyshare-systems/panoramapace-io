import * as React from "react";

import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          aoenik_regular.className,
          "pl-3 p-2 border border-white-8 backdrop-blur w-full bg-transparent rounded-lg text-white-100 placeholder-white-16 focus:outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
