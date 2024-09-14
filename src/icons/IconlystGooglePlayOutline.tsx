import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGooglePlayOutline = ({
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
      d="m7.416 2.634 12.108 6.787c.484.273.883.674 1.153 1.16h.001a3.004 3.004 0 0 1-1.168 4.084L7.404 21.373a3.002 3.002 0 0 1-4.46-2.625V5.253c.001-.514.134-1.02.385-1.468m4.087-1.15a3 3 0 0 0-4.087 1.15zm-.734 1.307a1.5 1.5 0 0 0-2.237 1.31v13.496a1.502 1.502 0 0 0 2.231 1.313l12.106-6.707a1.505 1.505 0 0 0 .005-2.627z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.958 8.016a.75.75 0 0 1-.015 1.06L4.859 20.83a.75.75 0 0 1-1.046-1.075L15.897 8a.75.75 0 0 1 1.06.015"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.799 3.18a.75.75 0 0 1 1.06-.014l12.122 11.791a.75.75 0 0 1-1.044 1.076l-3.601-3.493-8.523-8.3a.75.75 0 0 1-.014-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGooglePlayOutline;
