import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacOSBulk = ({
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
      d="M6.82 8.286a.75.75 0 0 1 1.5 0v1.13a.75.75 0 0 1-1.5 0zm5.75 9.535q-.358.033-.723.034a7.64 7.64 0 0 1-5.133-1.963.75.75 0 1 1 1.005-1.112 6.14 6.14 0 0 0 4.737 1.546 26 26 0 0 1-.033-2.274 14 14 0 0 1-1.52-.141c-1.208-.154-1.496-.8-1.554-1.723-.066-1.405.838-6.66 1.354-9.333H7.537C4.524 2.855 2.5 4.973 2.5 8.126v7.75c0 3.153 2.024 5.27 5.037 5.27h5.483a39 39 0 0 1-.45-3.326"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.462 2.855H12.23c-.561 2.844-1.44 8.069-1.383 9.252.01.16.025.245.035.288.037.003.097.014.22.03.635.09 1.14.13 1.603.13.392 0 .702.116.918.343.336.35.317.789.3 1.175-.01.242-.027.904.018 1.912a6.2 6.2 0 0 0 2.314-1.467.75.75 0 0 1 1.063 1.057 7.7 7.7 0 0 1-3.272 1.96c.102 1.195.273 2.404.495 3.61h1.919c3.014 0 5.039-2.116 5.039-5.268v-7.75c0-3.153-2.024-5.272-5.038-5.272"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.432 10.164a.75.75 0 0 0 .75-.75V8.285a.75.75 0 0 0-1.5 0v1.13c0 .413.336.75.75.75"
    />
  </Svg>
);
export default IconlystMacOSBulk;
