"use client";

import React, { KeyboardEvent, useState } from "react";
import cn from "classnames";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "./star-icon.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [currentRating, setCurrentRating] = useState<number>(rating);
  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    setCurrentRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (!setRating || e.code != "Space") {
      return;
    }
    setRating(i);
  };
  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props} onMouseLeave={() => changeDisplay(rating)}>
      {isEditable ? <h2>Оценка: {currentRating}</h2> : <h2>Оценка: {rating}</h2>}
      <span>
        {Array(5)
          .fill(<></>)
          .map((e, i) => (
            <StarIcon
              className={cn(styles.star, {
                [styles.filled]: i < currentRating,
                [styles.editable]: isEditable,
              })}
              key={i}
              onMouseEnter={() => changeDisplay(i + 1)}
              onClick={() => onClick(i + 1)}
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(i + 1, e)
              }
            />
          ))}
      </span>
    </div>
  );
};
