import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlightlyFrowningBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M15.225 10a.976.976 0 0 1-.692-1.662.978.978 0 0 1 1.668.687.976.976 0 0 1-.976.975m.112 5.917a.75.75 0 0 1-1.051-.137c-.581-.756-1.414-1.189-2.286-1.189-.871 0-1.704.433-2.285 1.189a.75.75 0 1 1-1.189-.915c.868-1.127 2.134-1.774 3.474-1.774 1.342 0 2.609.647 3.475 1.775a.75.75 0 0 1-.138 1.051M7.75 9.025a.97.97 0 0 1 .283-.687.978.978 0 0 1 1.668.687.976.976 0 0 1-1.951 0M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.261-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSlightlyFrowningBold;
