import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntoUserBroken = ({
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
      d="M16.604 11.74h4.525m-4.526 0 1.826-1.818m-1.825 1.818 1.825 1.817M5.932 7.996a3.995 3.995 0 1 0 .94-2.575M9.926 20c-3.392 0-6.254-.53-6.254-2.572 0-2.043 2.879-2.553 6.254-2.553 3.393 0 6.255.528 6.255 2.571 0 1.253-1.086 1.93-2.706 2.266"
    />
  </Svg>
);
export default IconlystIntoUserBroken;
