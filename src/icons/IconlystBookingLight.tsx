import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookingLight = ({
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
      d="M7.5 3h9.004A4.496 4.496 0 0 1 21 7.496v9.008A4.496 4.496 0 0 1 16.504 21H5a2 2 0 0 1-2-2V7.5A4.5 4.5 0 0 1 7.5 3"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.637 12h4a2 2 0 1 1 0 4h-4V9a1 1 0 0 1 1-1h2a2 2 0 1 1 0 4M16.281 15.49v.054m.219-.043a.22.22 0 1 1-.44 0 .22.22 0 0 1 .44 0"
    />
  </Svg>
);
export default IconlystBookingLight;
