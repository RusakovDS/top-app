import React from "react";
import cn from "classnames";
import { ParagraphProps } from "./Paragraph.props";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  children,
  className,
  size = "medium",
  ...props
}: ParagraphProps): JSX.Element => {
  return (
    <p
      className={cn(
        styles.paragraph,
        className,
        { [styles.small]: size === "small" },
        { [styles.medium]: size === "medium" },
        { [styles.large]: size === "large" }
      )}
      {...props}
    >
      {children}
    </p>
  );
};
