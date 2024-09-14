import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseRightSideTwoTone = ({
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
      d="M8.282 21h8.435c2.948 0 4.783-2.081 4.783-5.026V8.026C21.5 5.081 19.665 3 16.716 3H8.282C5.334 3 3.5 5.081 3.5 8.026v7.948C3.5 18.919 5.343 21 8.282 21M16.968 10.129l-3.745 3.745m0-3.745 3.745 3.745"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.042 21V3"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloseRightSideTwoTone;
