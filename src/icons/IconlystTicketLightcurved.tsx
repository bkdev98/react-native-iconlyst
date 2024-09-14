import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketLightcurved = ({
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
      d="M13.36 3.6v2.655M13.36 17.544v2.22M13.36 14.544V9.255"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 14.05c-2.69 0-2.69-4.101 0-4.101 0-4.753 0-6.449-9.5-6.449S2.5 5.196 2.5 9.949c2.69 0 2.69 4.101 0 4.101 0 4.754 0 6.45 9.5 6.45s9.5-1.696 9.5-6.45"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTicketLightcurved;
