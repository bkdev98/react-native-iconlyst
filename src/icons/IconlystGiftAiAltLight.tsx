import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftAiAltLight = ({
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
      d="M11.998 7.142S11.198 3 8.396 3c-1.106 0-2.002.927-2.002 2.071s.896 2.07 2.002 2.07M15.601 7.142c1.105 0 2.001-.927 2.001-2.07 0-1.145-.896-2.072-2.001-2.072-2.802 0-3.603 4.142-3.603 4.142"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.873 20.999H7.127c-2.15 0-3.486-1.602-3.486-3.87V11.01c0-2.268 1.336-3.87 3.487-3.87h9.745c2.15 0 3.486 1.602 3.486 3.87v6.118c0 2.27-1.344 3.87-3.486 3.87M11.998 7.14l-1.113 1.848M11.998 7.14l1.113 1.848"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.593 12 .101.273a3.76 3.76 0 0 0 2.222 2.225l.273.102-.273.1a3.76 3.76 0 0 0-2.222 2.226l-.1.273-.102-.273a3.76 3.76 0 0 0-2.221-2.225l-.273-.101.273-.102a3.76 3.76 0 0 0 2.221-2.225zM8.234 11.294a2.08 2.08 0 0 0 1.385 1.388 2.08 2.08 0 0 0-1.385 1.388 2.08 2.08 0 0 0-1.386-1.388 2.08 2.08 0 0 0 1.386-1.388"
    />
  </Svg>
);
export default IconlystGiftAiAltLight;
