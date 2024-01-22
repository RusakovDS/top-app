import React from "react";
import cn from "classnames";
import styles from "./Tag.module.css";
import { TagProps } from "./Tag.props";

export const Tag = ({
  children,
  className,
  size = "small",
  color = "ghost",
  href,
  ...props
}: TagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : children}
    </div>
  );
};
