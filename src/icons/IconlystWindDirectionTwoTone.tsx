import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindDirectionTwoTone = ({
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
      d="M10.75 3.974a1.755 1.755 0 0 1 3.064 1.17c0 .969-.715 1.755-1.756 1.755H7.971M15.758 18.467a2.046 2.046 0 0 0 3.744-1.144c0-1.131-.826-2.048-2.047-2.048H9.477"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.114 11.47h8.778M5.068 9.517l-1.954 1.954 1.954 1.953M17.015 7.331a2.45 2.45 0 0 1 4.224 1.69c0 1.352-.898 2.424-2.45 2.45h-4.3M9.477 18.553h-5.13"
    />
  </Svg>
);
export default IconlystWindDirectionTwoTone;
