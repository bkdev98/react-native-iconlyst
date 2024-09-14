import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallBroken = ({
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
      d="M11.532 12.472c-3.99-3.988.622-4.895-1.918-7.435-2.448-2.448-2.93-3.863-6.04-.753-.196.244-1.75 1.31-.73 4.216"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.5 13.92c2.423 1.048 3.407-1.592 5.466.465 2.448 2.448 3.856 2.938.753 6.04-.388.312-2.857 4.07-11.534-4.605C6.299 13.934 5 12.342 4.125 11"
    />
  </Svg>
);
export default IconlystCallBroken;
