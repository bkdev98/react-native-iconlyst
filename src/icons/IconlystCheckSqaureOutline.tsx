import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckSqaureOutline = ({
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
      d="M3.902 4.42c.927-.995 2.247-1.55 3.801-1.55h7.854c1.558 0 2.878.554 3.805 1.55.922.99 1.4 2.354 1.4 3.88v7.4c0 1.526-.478 2.89-1.4 3.88-.927.995-2.248 1.55-3.806 1.55H7.703c-1.558 0-2.878-.555-3.805-1.55-.921-.99-1.398-2.354-1.398-3.88V8.3c0-1.527.48-2.891 1.402-3.88m1.097 1.022C4.379 6.108 4 7.084 4 8.3v7.4c0 1.216.377 2.192.996 2.857.613.66 1.52 1.073 2.707 1.073h7.853c1.188 0 2.095-.414 2.708-1.073.62-.665.997-1.64.997-2.857V8.3c0-1.216-.377-2.193-.997-2.858-.613-.659-1.52-1.073-2.707-1.073H7.703c-1.182 0-2.09.414-2.704 1.073"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.925 4.993a.75.75 0 0 1-.349 1.002c-4.95 2.396-8 6.787-9.407 9.43a.75.75 0 0 1-1.307.031 15.6 15.6 0 0 0-3.367-3.95.75.75 0 0 1 .967-1.147 17.2 17.2 0 0 1 3.001 3.268c1.681-2.799 4.756-6.705 9.46-8.983a.75.75 0 0 1 1.002.349"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheckSqaureOutline;
