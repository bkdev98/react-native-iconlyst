import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseLeftSideLight = ({
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
      d="M16.218 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.081 4.835 3 7.784 3h8.434C19.166 3 21 5.081 21 8.026v7.948C21 18.919 19.157 21 16.218 21M15.458 21V3M7.531 10.129l3.745 3.745m0-3.745-3.744 3.745"
    />
  </Svg>
);
export default IconlystCloseLeftSideLight;
