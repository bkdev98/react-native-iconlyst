import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplaySearchBulk = ({
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
      d="M10.676 3.045h6.294c2.5 0 4.53 2.03 4.53 4.53v5.45c0 2.5-2.03 4.53-4.53 4.53H7.03c-2.5 0-4.53-2.03-4.53-4.53V9.97c0-.173.207-.268.345-.164a5.08 5.08 0 0 0 4.365.848l.06.06c.49.49 1.13.73 1.77.73s1.28-.24 1.77-.73c.97-.97.97-2.54.01-3.52.15-.48.23-.99.23-1.52 0-.834-.196-1.622-.555-2.32-.072-.138.025-.31.181-.31"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.903 3.775a1.903 1.903 0 0 0-1.9 1.9c0 1.048.852 1.9 1.9 1.9 1.047 0 1.9-.852 1.9-1.9 0-1.047-.853-1.9-1.9-1.9M9.04 9.697a.75.75 0 0 1-.53-.219l-.878-.876c-.507.3-1.098.473-1.729.473a3.404 3.404 0 0 1-3.4-3.4c0-1.875 1.525-3.4 3.4-3.4s3.4 1.525 3.4 3.4c0 .702-.214 1.354-.579 1.896l.846.845a.75.75 0 0 1-.53 1.281"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m9.043 17.557-.434 2.668H7.056a.75.75 0 0 0 0 1.5h9.888a.75.75 0 0 0 0-1.5h-1.552l-.435-2.668h-1.519l.434 2.668h-3.743l.433-2.668z"
    />
  </Svg>
);
export default IconlystMonitorDisplaySearchBulk;
