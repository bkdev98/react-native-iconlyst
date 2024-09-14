import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudDashLight = ({
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
      d="M17.561 19.086a9.002 9.002 0 0 1-7.522 1.694M6.852 19.36a9 9 0 0 1-3.12-3.782M3.327 9.547a9 9 0 0 0-.299 3.034M4.777 6.634A9 9 0 0 1 6.23 5.082M19.646 16.724a8.92 8.92 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.348-8.657"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.607 10.679c-1.109.01-2.005.754-2.005 2.024 0 .82.489 1.527 1.191 1.844.295.12.59.165.812.165h4.787c.224 0 .519-.043.818-.163a2.02 2.02 0 0 0 1.189-1.846c0-1.27-.896-2.015-2.005-2.024 0-.798-.626-2.394-2.393-2.394-1.768 0-2.394 1.596-2.394 2.394"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudDashLight;
