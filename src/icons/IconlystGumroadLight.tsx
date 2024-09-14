import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadLight = ({
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
      d="M14.685 14.203a1.472 1.472 0 1 0 .004 0M18.11 3a1.472 1.472 0 1 0 .005 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.642 4.473H5.945c-.967 0-1.752.784-1.752 1.75V19.25c0 .967.785 1.75 1.752 1.75h12.112c.967 0 1.751-.783 1.751-1.75v-7.246c0-.967-.784-1.751-1.751-1.751h-6.752c-.967 0-1.752.784-1.752 1.751v1.904c0 .967.784 1.752 1.752 1.752h1.93"
    />
  </Svg>
);
export default IconlystGumroadLight;
