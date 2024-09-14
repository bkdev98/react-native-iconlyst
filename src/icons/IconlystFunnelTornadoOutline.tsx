import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFunnelTornadoOutline = ({
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
      d="M11.73 10.923a2.868 2.868 0 1 1 0 5.736 2.868 2.868 0 0 1 0-5.736M16.1 13.79a4.368 4.368 0 1 0-8.737 0 4.368 4.368 0 0 0 8.737 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.98 3a.75.75 0 0 1 .75-.75c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75a7.983 7.983 0 1 1 0-15.967 6.188 6.188 0 0 1 0 12.376.75.75 0 0 1 0-1.5 4.688 4.688 0 0 0 0-9.376 6.484 6.484 0 0 0 0 12.967 8.25 8.25 0 1 0 0-16.5.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFunnelTornadoOutline;
