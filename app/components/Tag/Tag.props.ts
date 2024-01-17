import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TagProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium";
  color?: "primary" | "green" | "red" | "gray" | "ghost";
  href?: string;
}
