import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayBold = ({
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
      d="M16.971 2.518H7.028A4.534 4.534 0 0 0 2.5 7.047v5.456a4.534 4.534 0 0 0 4.528 4.53h9.943a4.535 4.535 0 0 0 4.529-4.53V7.047a4.535 4.535 0 0 0-4.529-4.53M16.438 19.732H7.447a.876.876 0 0 0 0 1.75h8.99a.877.877 0 0 0 .876-.875.877.877 0 0 0-.875-.875"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayBold;
