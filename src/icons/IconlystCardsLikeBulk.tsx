import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardsLikeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.894 11.14a.82.82 0 0 0-.76-.02.75.75 0 0 1-.88-.18c-.18-.2-.44-.3-.71-.27-.54.07-.77.63-.72 1.13.1.77.82 1.62 1.31 2.11.64-.27 1.64-.79 2-1.46.15-.28.2-.6.12-.87a.75.75 0 0 0-.36-.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.454 13.17c-.82 1.5-3.01 2.24-3.26 2.31-.07.03-.15.04-.23.04-.17 0-.34-.06-.48-.17-.19-.17-1.94-1.65-2.15-3.37-.01-.11-.02-.22-.02-.33 0-1.26.85-2.31 2.05-2.46.57-.07 1.15.08 1.61.4a2.34 2.34 0 0 1 1.64.24c.52.28.91.75 1.08 1.33.19.65.1 1.38-.24 2.01m2.63-6.99c-.53-.68-1.32-1.11-2.27-1.23l-5.09-.65c-.96-.12-1.83.09-2.51.62-.72.56-1.19 1.44-1.32 2.48l-1.21 9.46c-.28 2.1.9 3.69 2.92 3.96l5.09.65c.18.02.35.03.52.03.79 0 1.5-.24 2.08-.72.67-.56 1.1-1.39 1.23-2.41l1.21-9.46c.14-1.04-.1-2.01-.65-2.73"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m7.193 16.664 1.21-9.458c.186-1.439.857-2.671 1.89-3.47a4.6 4.6 0 0 1 2.213-.905c.224-.03.266-.3.04-.319a4 4 0 0 0-.804.021l-5.424.692c-1.016.127-1.85.579-2.412 1.306-.585.757-.83 1.778-.686 2.872l1.29 10.112c.143 1.102.639 2.03 1.396 2.612.589.453 1.306.685 2.098.685h.026c.164-.002.24-.202.14-.332-.785-1.006-1.168-2.335-.977-3.816"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCardsLikeBulk;
