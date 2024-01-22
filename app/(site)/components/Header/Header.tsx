import React from "react";
import { HeaderProps } from "./Header.props";

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <nav {...props}>Header</nav>;
};
