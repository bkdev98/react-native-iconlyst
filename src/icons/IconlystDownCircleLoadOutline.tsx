import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownCircleLoadOutline = ({
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
      d="M11.998 7.379a.75.75 0 0 1 .75.75v5.927l1.74-1.746a.75.75 0 1 1 1.062 1.06l-3.02 3.03a.75.75 0 0 1-1.063 0l-3.018-3.031a.75.75 0 1 1 1.063-1.058l1.736 1.744V8.129a.75.75 0 0 1 .75-.75M6.801 4.595a.75.75 0 0 1-.088 1.057c-.5.423-.947.9-1.331 1.423a.75.75 0 0 1-1.21-.887 9.8 9.8 0 0 1 1.572-1.681.75.75 0 0 1 1.057.088M3.524 8.822a.75.75 0 0 1 .526.921 8.2 8.2 0 0 0-.274 2.78.75.75 0 1 1-1.496.113 9.7 9.7 0 0 1 .323-3.287.75.75 0 0 1 .921-.527M3.43 14.893a.75.75 0 0 1 .989.384 8.26 8.26 0 0 0 2.86 3.467.75.75 0 1 1-.853 1.234 9.76 9.76 0 0 1-3.38-4.097.75.75 0 0 1 .384-.988M11.612 2.257c5.387-.207 9.92 3.992 10.127 9.378a9.67 9.67 0 0 1-1.457 5.484.75.75 0 0 1-1.275-.79 8.17 8.17 0 0 0 1.233-4.637 8.26 8.26 0 0 0-8.57-7.936.75.75 0 0 1-.058-1.499M18.162 18.633c.25.33.184.801-.146 1.05-2.421 1.83-5.28 2.447-8.148 1.835a.75.75 0 1 1 .313-1.467c2.44.52 4.856.004 6.93-1.564a.75.75 0 0 1 1.051.146"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownCircleLoadOutline;
