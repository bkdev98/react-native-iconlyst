import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinDashBroken = ({
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
      d="M12.41 16.046s-3.384-2.3-3.384-4.709a3.384 3.384 0 1 1 6.768 0c0 1.233-.745 2.438-1.545 3.32M5.312 6.727A8.8 8.8 0 0 1 6.739 5.2M17.874 18.963a8.8 8.8 0 0 1-4.793 1.856 8.9 8.9 0 0 1-2.599-.19M7.35 19.236a8.87 8.87 0 0 1-3.066-3.716M3.887 9.59a8.8 8.8 0 0 0-.293 2.981M19.922 16.641a8.77 8.77 0 0 0 1.322-4.973 8.85 8.85 0 0 0-9.186-8.505"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.413 11.315v.046m.186-.036a.187.187 0 1 1-.375 0 .187.187 0 0 1 .375 0"
    />
  </Svg>
);
export default IconlystPinDashBroken;
