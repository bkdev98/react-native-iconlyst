import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitor2Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.871 19.841h-3.743l.433-2.668h2.876zm3.1-17.183H7.028A4.534 4.534 0 0 0 2.5 7.188v5.456a4.534 4.534 0 0 0 4.528 4.53h2.014l-.434 2.667H7.055a.75.75 0 0 0 0 1.5h9.888a.75.75 0 0 0 0-1.5h-1.552l-.435-2.668h2.015a4.535 4.535 0 0 0 4.529-4.529V7.188a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitor2Bold;
