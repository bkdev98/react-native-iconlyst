import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudySnowyMoonLight = ({
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
      d="M11.98 10.484c-1.491.013-2.697 1.015-2.697 2.721 0 1.104.658 2.054 1.602 2.48a3 3 0 0 0 1.093.224h6.438c.3 0 .697-.059 1.1-.22a2.72 2.72 0 0 0 1.598-2.484c0-1.706-1.204-2.708-2.696-2.721 0-1.073-.842-3.22-3.22-3.22-2.376 0-3.218 2.147-3.218 3.22"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.535 14.7H6.581a3.9 3.9 0 0 1-1.406-.287 3.5 3.5 0 0 1-2.06-3.19c0-2.195 1.55-3.483 3.469-3.5 0-1.38 1.082-4.141 4.14-4.141 2.71 0 3.869 2.169 4.097 3.623M14.97 18.586h.007m3.216 1.832h.007m-9.678-1.832h-.007M5.299 19.9H5.29M3.755 16.87h-.007m7.998 3.032h-.008m8.736-2.16h.007"
    />
  </Svg>
);
export default IconlystCloudySnowyMoonLight;
