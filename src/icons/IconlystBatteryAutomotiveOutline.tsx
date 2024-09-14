import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBatteryAutomotiveOutline = ({
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
      d="M6.916 4.421a.416.416 0 0 0-.416.417v1.97a.75.75 0 0 1-1.5 0v-1.97a1.916 1.916 0 0 1 3.833 0v1.828a.75.75 0 0 1-1.5 0V4.838a.416.416 0 0 0-.417-.417M15.668 4.838a1.916 1.916 0 0 1 3.832 0v1.97a.75.75 0 0 1-1.5 0v-1.97a.416.416 0 1 0-.832 0v1.828a.75.75 0 0 1-1.5 0zM6 13.671a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M14 13.671a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.25 11.421a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.762 5.921A4.24 4.24 0 0 1 22 10.16v6.682a4.24 4.24 0 0 1-4.238 4.238H6.738A4.24 4.24 0 0 1 2.5 16.84v-6.682a4.24 4.24 0 0 1 4.238-4.238zM20.5 10.16a2.74 2.74 0 0 0-2.738-2.738H6.738A2.74 2.74 0 0 0 4 10.16v6.682a2.74 2.74 0 0 0 2.738 2.738h11.024A2.74 2.74 0 0 0 20.5 16.84z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBatteryAutomotiveOutline;
