import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMicrophoneMinusBroken = ({
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
      d="M17.178 6.338H14.11M15.908 10.883a3.666 3.666 0 0 1-3.657 3.675h-.002a3.666 3.666 0 0 1-3.66-3.675M12.25 3a3.66 3.66 0 0 0-3.66 3.66v1.51M12.25 21v-2.848M5.043 10.912a7.224 7.224 0 0 0 7.206 7.24 7.2 7.2 0 0 0 2.472-.44M17.114 16.253a7.2 7.2 0 0 0 2.342-5.34"
    />
  </Svg>
);
export default IconlystMicrophoneMinusBroken;
