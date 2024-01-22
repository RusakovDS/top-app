import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
}
