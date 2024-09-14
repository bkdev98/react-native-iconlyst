import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirpodProCase1Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.374 4.527A4.373 4.373 0 0 0 4 8.9v.058h16.5V8.9a4.37 4.37 0 0 0-4.373-4.373zM22 8.9a5.87 5.87 0 0 0-5.873-5.873H8.374A5.873 5.873 0 0 0 2.5 8.9v6.2a5.874 5.874 0 0 0 5.874 5.873h7.753A5.873 5.873 0 0 0 22 15.1zm-1.5 1.558h-3.068v.283a2.87 2.87 0 0 1-2.872 2.872H9.943a2.87 2.87 0 0 1-2.87-2.872v-.283H4V15.1a4.374 4.374 0 0 0 4.374 4.373h7.753A4.373 4.373 0 0 0 20.5 15.1zm-11.928 0v.283c0 .758.615 1.372 1.371 1.372h4.617c.758 0 1.372-.614 1.372-1.372v-.283z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirpodProCase1Outline;
