import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHideTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.775 21.994 5.137 7.355M8.752 6.095a4.32 4.32 0 0 1 3.698-2.169 4.356 4.356 0 0 1 4.414 4.3v2.054"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.067 10.313c-.488.035-.847.108-1.16.258A2.97 2.97 0 0 0 5.52 11.96c-.292.608-.292 1.396-.292 2.973v2.107c0 1.576 0 2.364.292 2.973a2.97 2.97 0 0 0 1.389 1.389c.608.292 1.397.292 2.973.292h5.328c1.577 0 2.365 0 2.973-.292q.313-.15.579-.366"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.922 10.281h2.288c1.576 0 2.365 0 2.973.292a2.97 2.97 0 0 1 1.389 1.39c.292.608.292 1.396.292 2.973v2.287"
    />
  </Svg>
);
export default IconlystLockHideTwoTone;
