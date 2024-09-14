import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarPartsOutline = ({
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
      d="M8.849 13.526a3.847 3.847 0 1 0 0 7.695 3.847 3.847 0 0 0 0-7.695m-5.347 3.847a5.347 5.347 0 1 1 10.694 0 5.347 5.347 0 0 1-10.694 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.589 12.476a.75.75 0 0 1-.022 1.06l-8.124 7.803a.75.75 0 1 1-1.039-1.081l8.124-7.803a.75.75 0 0 1 1.06.021"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.117 9.512a1.804 1.804 0 1 0 0 3.607 1.804 1.804 0 0 0 0-3.607m-3.304 1.803a3.304 3.304 0 1 1 6.608 0 3.304 3.304 0 0 1-6.607 0M5.059 4.72a1.293 1.293 0 1 0 0 2.587 1.293 1.293 0 0 0 0-2.587M2.266 6.014a2.793 2.793 0 1 1 5.586 0 2.793 2.793 0 0 1-5.586 0M8.85 16.623a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25.75a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.076 3.84a.75.75 0 0 1 .961-.448L19.39 8.259a.75.75 0 0 1-.514 1.41L5.523 4.8a.75.75 0 0 1-.447-.962M2.926 5.35a.75.75 0 0 1 .826.666l1.275 11.798a.75.75 0 0 1-1.492.161L2.261 6.177a.75.75 0 0 1 .665-.827"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.518 7.528a.75.75 0 0 1 .99-.38l12.364 5.494a.75.75 0 0 1-.61 1.371L3.899 8.518a.75.75 0 0 1-.38-.99"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarPartsOutline;
