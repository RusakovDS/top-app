import React from "react";
import cn from "classnames";
import { FooterProps } from "./Footer.props";
import style from "./Footer.module.css";
import { getYear } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, style.footer)} {...props}>
      <div>OwlTop © {getYear(new Date())} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
