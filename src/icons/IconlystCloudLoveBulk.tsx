import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudLoveBulk = ({
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
      d="M18.015 7.95a.21.21 0 0 1-.183-.179c-.294-2.107-2.009-4.74-5.33-4.74-3.571 0-5.04 2.91-5.325 4.743a.21.21 0 0 1-.183.176c-2.36.29-3.957 2.098-3.957 4.583a4.64 4.64 0 0 0 2.74 4.222c.292.119.57.201.823.257.13.03.247-.084.236-.218-.17-2.1 1.02-4.04 3.035-4.689a4.47 4.47 0 0 1 2.475-.069.2.2 0 0 0 .104 0 4.46 4.46 0 0 1 2.45.064c2.041.659 3.234 2.618 3.048 4.732-.012.131.098.244.228.222a5.2 5.2 0 0 0 1.072-.302 4.64 4.64 0 0 0 2.715-4.219c0-2.483-1.593-4.29-3.948-4.582"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.634 16.949c-.308.979-1.51 1.92-2.242 2.395-.727-.467-1.916-1.4-2.238-2.398-.214-.668-.037-1.51.71-1.75.37-.115.771-.05 1.08.183a.75.75 0 0 0 .898.002c.31-.23.712-.3 1.076-.185.751.242.931 1.083.716 1.753m-.26-3.182a2.7 2.7 0 0 0-1.978.14 2.7 2.7 0 0 0-1.99-.14c-1.445.467-2.184 2.063-1.682 3.635l.001.002c.643 2.002 3.201 3.414 3.31 3.473a.75.75 0 0 0 .72-.002c.274-.15 2.696-1.527 3.31-3.473.501-1.571-.24-3.167-1.692-3.635"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudLoveBulk;
