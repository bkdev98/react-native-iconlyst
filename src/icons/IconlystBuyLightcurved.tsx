import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyLightcurved = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.524 7C9.414 5.744 13.972 5.456 16 5.5s2.883.766 3.5 2c1 2 .789 6.988-1 8.587-1.788 1.6-9.17 1.751-11.63 0-2.599-1.85-1.241-6.895-1.326-10.344C5.595 3.813 3.5 3.5 3.5 3.5M13 10.5h2.773"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.264 20.128a.545.545 0 1 1-.001 1.089.545.545 0 0 1 .001-1.09M17.596 20.128a.545.545 0 1 1 0 1.09.545.545 0 0 1 0-1.09"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuyLightcurved;
