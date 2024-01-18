import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface RatingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
