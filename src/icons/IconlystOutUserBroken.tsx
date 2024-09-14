import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOutUserBroken = ({
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
      d="M3.703 20c0-2.11 1.664-4.734 6.458-4.734s6.459 2.606 6.459 4.716M21.097 12.045h-4.673m2.787-1.877 1.885 1.877-1.885 1.876M6.036 8.126a4.125 4.125 0 1 0 1.007-2.702"
    />
  </Svg>
);
export default IconlystOutUserBroken;
