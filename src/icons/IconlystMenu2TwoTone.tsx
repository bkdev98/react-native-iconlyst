import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenu2TwoTone = ({
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
      d="M3.98 7.467v9.068M21.98 7.467v9.068"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.988 20h5.94c1.712 0 3.1-1.388 3.1-3.1V7.099a3.1 3.1 0 0 0-3.1-3.101h-5.94a3.1 3.1 0 0 0-3.101 3.1V16.9c0 1.712 1.388 3.1 3.1 3.1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMenu2TwoTone;
