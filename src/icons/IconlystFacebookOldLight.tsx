import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFacebookOldLight = ({
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
      d="M14.36 6.824h1.908c.24 0 .434.194.434.433v2.255c0 .24-.195.434-.434.434H14.36a.8.8 0 0 0-.552.226.78.78 0 0 0-.228.554v2.342h2.688c.24 0 .434.194.434.433v2.255c0 .24-.195.433-.434.433H13.58V20.5a.5.5 0 0 0 .5.5h2.136C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.217 3H7.782C4.842 3 3 5.081 3 8.026v7.948C3 18.919 4.834 21 7.782 21h2.176a.5.5 0 0 0 .5-.5v-4.31H8.55a.434.434 0 0 1-.434-.434V13.5c0-.24.195-.433.434-.433h1.908v-2.342c0-1.038.41-2.03 1.143-2.763a3.92 3.92 0 0 1 2.76-1.14"
    />
  </Svg>
);
export default IconlystFacebookOldLight;
