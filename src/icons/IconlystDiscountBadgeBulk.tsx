import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBadgeBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.009 13.212a1.734 1.734 0 0 0 0-2.425l-1.01-1.045a.74.74 0 0 1-.2-.619L20 7.684a1.735 1.735 0 0 0-1.424-1.96l-1.43-.25a.74.74 0 0 1-.53-.387l-.68-1.283a1.737 1.737 0 0 0-2.305-.748l-1.306.638a.74.74 0 0 1-.652 0l-1.307-.638a1.737 1.737 0 0 0-2.304.75l-.68 1.281a.74.74 0 0 1-.528.385l-1.432.251a1.734 1.734 0 0 0-1.424 1.961l.203 1.44a.74.74 0 0 1-.202.62l-1.01 1.043a1.735 1.735 0 0 0 0 2.425L4 14.257c.16.165.235.39.202.62l-.203 1.436a1.74 1.74 0 0 0 1.424 1.963l1.432.251a.75.75 0 0 1 .527.382l.68 1.284a1.737 1.737 0 0 0 2.306.75l1.306-.638a.74.74 0 0 1 .652 0l1.306.637a1.736 1.736 0 0 0 2.305-.749l.68-1.283a.75.75 0 0 1 .529-.383l1.43-.252a1.736 1.736 0 0 0 1.425-1.96l-.203-1.44a.73.73 0 0 1 .202-.619z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.436 14.384a.947.947 0 0 0 1.892 0 .947.947 0 0 0-1.892 0M9.605 15.202a.74.74 0 0 0 .53-.22l4.898-4.897a.749.749 0 1 0-1.06-1.06l-4.898 4.897a.749.749 0 0 0 .53 1.28M10.564 9.618a.947.947 0 1 0-1.894.001.947.947 0 0 0 1.894-.001"
    />
  </Svg>
);
export default IconlystDiscountBadgeBulk;
