import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFigTwoTone = ({
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
      d="M10.897 14.356s-.883.993-.703 2.432M12.59 13.473s1.213-.287 1.459-1.472M12.59 15.572s.718.9 1.73 1.297"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.531 3.298c-1.209 4.907-8.975 7.53-6.604 13.673 2.375 6.154 13.705 4.922 14.543-1.414.746-5.646-7.063-6.755-6.026-11.338.145-.639-1.707-1.755-1.913-.921"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.317 10.127c-.206-.3-.389-.307-.584 0-1.121 1.762-4.04 3.082-3.083 5.564 1.125 2.914 6.888 2.357 6.888-.67 0-2.647-1.752-2.768-3.22-4.894"
    />
  </Svg>
);
export default IconlystFigTwoTone;
