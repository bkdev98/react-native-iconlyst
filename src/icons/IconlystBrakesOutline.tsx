import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBrakesOutline = ({
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
      d="M11.442 5.28a7.51 7.51 0 1 0 7.51 7.51.75.75 0 0 1 1.5 0 9.01 9.01 0 1 1-9.01-9.01.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.692 3.05a.75.75 0 0 1 .75-.75 10.49 10.49 0 0 1 10.49 10.49.75.75 0 0 1-.75.75h-2.96a.75.75 0 0 1-.75-.75 6.03 6.03 0 0 0-6.03-6.03.75.75 0 0 1-.75-.75zm1.5.781v1.466a7.53 7.53 0 0 1 6.743 6.743h1.466a8.99 8.99 0 0 0-8.209-8.209"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.442 9.55a3.24 3.24 0 1 0 0 6.48 3.24 3.24 0 0 0 0-6.48m-4.74 3.24a4.74 4.74 0 1 1 9.48 0 4.74 4.74 0 0 1-9.48 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.66 12.79a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1 0-1.5h.01a.75.75 0 0 1 .75.75M10.732 12.79a.75.75 0 0 1-.75.75h-.009a.75.75 0 0 1 0-1.5h.009a.75.75 0 0 1 .75.75M11.442 15.008a.75.75 0 0 1-.75-.75v-.009a.75.75 0 0 1 1.5 0v.009a.75.75 0 0 1-.75.75M11.442 12.08a.75.75 0 0 1-.75-.75v-.008a.75.75 0 0 1 1.5 0v.009a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBrakesOutline;
