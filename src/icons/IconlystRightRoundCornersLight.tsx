import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightRoundCornersLight = ({
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
      d="M15.871 11.998h-7.74m7.74 0-3.03 3.022m3.03-3.022-3.03-3.017M6.729 6.733C4.469 7.914 3 9.834 3 12.003s1.471 4.09 3.732 5.27C7.912 19.53 9.832 21 12 21s4.087-1.469 5.268-3.727C19.53 16.093 21 14.17 21 12.003c0-2.169-1.47-4.089-3.729-5.27C16.092 4.472 14.17 3 12.002 3 9.83 3 7.908 4.472 6.728 6.733"
    />
  </Svg>
);
export default IconlystRightRoundCornersLight;
