import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmillBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.034 20.936-6.414-.064a.942.942 0 0 1-.112-1.878l12.723-1.639A1.83 1.83 0 1 1 17.447 21l-3.206-.032M5.467 8.687c.768-1.157 2.207-2.013 3.621-1.782 2.323.38 2.877 3.484 5.377 3.484"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.527 7.75c-1.118 1.44-2.209 2.919-1.093 4.704.546.874 1.227 1.629 1.24 2.715.013 1.15-.564 2.22-1.11 3.196M7.506 13.852c-.56.406-1.295.593-1.974.668-.613.068-1.232.047-1.846.015M13.444 3c.924 0 1.68.752 1.68 1.68 0 .93-.756 1.682-1.68 1.682s-1.68-.753-1.68-1.682M16.703 17.424l1.248-9.742 2.366-1.024"
    />
  </Svg>
);
export default IconlystTreadmillBroken;