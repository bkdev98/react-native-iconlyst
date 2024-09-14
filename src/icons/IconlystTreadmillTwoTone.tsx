import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTreadmillTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.216 19.69a.94.94 0 0 1 .791-.696l12.723-1.639A1.83 1.83 0 1 1 17.946 21L5.12 20.872a.942.942 0 0 1-.903-1.182"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.967 8.686c.768-1.157 2.207-2.013 3.621-1.782 2.323.38 2.877 3.484 5.377 3.484"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.027 7.749c-1.118 1.441-2.209 2.919-1.093 4.704.546.874 1.227 1.629 1.24 2.715.013 1.15-.564 2.22-1.11 3.196"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.006 13.85c-.56.407-1.295.594-1.974.669-.613.068-1.232.047-1.846.015"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.944 6.362c.924 0 1.68-.753 1.68-1.682S14.868 3 13.944 3s-1.68.752-1.68 1.68c0 .93.756 1.682 1.68 1.682"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.203 17.424 1.248-9.742 2.366-1.024"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTreadmillTwoTone;