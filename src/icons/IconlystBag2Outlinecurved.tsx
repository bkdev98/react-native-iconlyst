import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBag2Outlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.438 7.42a4.532 4.532 0 0 1 9.062.02v.001l-.75-.001h.75v3.032a.75.75 0 0 1-1.5 0V7.438a3.031 3.031 0 0 0-6.062-.014v3.048a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.385 10.283c-1.137.89-1.685 2.361-1.685 4.925 0 2.562.548 4.033 1.685 4.923 1.194.934 3.218 1.384 6.584 1.384s5.39-.45 6.584-1.384c1.137-.89 1.685-2.36 1.685-4.924 0-2.563-.548-4.034-1.685-4.924C17.359 9.35 15.334 8.9 11.969 8.9c-3.366 0-5.39.45-6.584 1.384m-.924-1.18c1.624-1.272 4.11-1.704 7.508-1.704s5.884.432 7.508 1.703c1.682 1.316 2.261 3.375 2.261 6.105s-.58 4.789-2.26 6.105c-1.625 1.271-4.11 1.703-7.509 1.703s-5.884-.432-7.508-1.703C2.779 19.996 2.2 17.938 2.2 15.207c0-2.73.58-4.789 2.26-6.105"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBag2Outlinecurved;
