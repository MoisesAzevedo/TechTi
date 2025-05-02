import React from "react";
import { Button } from "@/components/ui/button";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | null
  | undefined;

interface DefaultButtonProps {
  variant?: ButtonVariant;
  className?: string;
  value: string;
}
const DefaultButton: React.FC<DefaultButtonProps> = ({
  variant,
  className,
  value
}) => {
  return (
    <Button
      variant={variant ? variant : "outline"}
      className={
        className
          ? className
          : "bg-[#CCD6FF] border-none hover:bg-primary hover:shadow-[0_0_6px_#5AFF60]  w-[137px] h-[39px] text-[#030B4D] font-bold"
      }
    >
      {value}
    </Button>
  );
};

export default DefaultButton;
