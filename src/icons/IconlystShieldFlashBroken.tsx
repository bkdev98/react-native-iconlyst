import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFlashBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.325 12.806c0-6.113.266-6.587-.322-7.18-.59-.593-6.041-2.49-7.002-2.49s-6.413 1.902-7.002 2.49-.321 1.066-.321 7.18S12 21.136 12 21.136s4.379-1.325 6.365-4.752"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.075 13.12h2.434v2.574c0 .428.549.606.8.26l2.976-4.099a.442.442 0 0 0-.358-.702h-2.434V8.58a.442.442 0 0 0-.8-.26l-1.488 2.05"
    />
  </Svg>
);
export default IconlystShieldFlashBroken;
