import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardShieldLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 11.404V8.111c0-2.443-1.52-4.168-3.965-4.168H6.965C4.528 3.943 3 5.668 3 8.111v6.587c0 2.442 1.521 4.167 3.965 4.167h3.327M3 9.24h18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.013 20.621s3.261-.988 3.261-3.71c0-2.72.117-2.635-.143-2.898-.262-.264-2.692-1.109-3.119-1.109s-2.856.847-3.117 1.11c-.262.26-.143.175-.143 2.897s3.26 3.71 3.26 3.71"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardShieldLight;
