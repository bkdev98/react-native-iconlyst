import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystErrorTriangleOutline = ({
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
      d="M9.918 4.522c1.06-1.835 3.71-1.829 4.76.012l6.96 12.215c1.041 1.83-.28 4.102-2.384 4.102H5.246c-2.111 0-3.43-2.285-2.376-4.114zm3.457.755a1.243 1.243 0 0 0-2.157-.005L4.169 17.487a1.243 1.243 0 0 0 1.077 1.864h14.008c.953 0 1.552-1.03 1.08-1.86z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.262 9.521a.75.75 0 0 1 .75.75v3.012a.75.75 0 1 1-1.5 0v-3.011a.75.75 0 0 1 .75-.75m-.002 6.008a.75.75 0 0 1 .75.75v.049a.75.75 0 0 1-1.5 0v-.049a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystErrorTriangleOutline;
