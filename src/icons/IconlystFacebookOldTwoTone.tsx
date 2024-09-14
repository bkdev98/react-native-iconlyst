import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookOldTwoTone = ({
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
      d="M10.458 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21H13.58"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.458 21v-4.81H8.55a.434.434 0 0 1-.434-.434v-2.254c0-.24.194-.434.434-.434h1.908v-2.341c0-1.038.41-2.03 1.143-2.764a3.92 3.92 0 0 1 2.759-1.139h1.908c.24 0 .433.194.433.434v2.254c0 .24-.194.434-.433.434H14.36a.8.8 0 0 0-.552.226.78.78 0 0 0-.229.555v2.341h2.689c.24 0 .433.194.433.434v2.254c0 .24-.194.434-.433.434h-2.689V21"
    />
  </Svg>
);
export default IconlystFacebookOldTwoTone;
