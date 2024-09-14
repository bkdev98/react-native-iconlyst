import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangle3Outline = ({
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
      d="M11.873 13.273a.75.75 0 0 1 .75 0l2.635 1.523a.75.75 0 0 1-.75 1.298l-2.26-1.305-2.234 1.288a.75.75 0 1 1-.75-1.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.246 10.216a.75.75 0 0 1 .75.75v2.957a.75.75 0 0 1-1.5 0v-2.957a.75.75 0 0 1 .75-.75M7.027 17.022a.75.75 0 0 1-.275 1.025l-2.885 1.66a.75.75 0 1 1-.749-1.3l2.885-1.66a.75.75 0 0 1 1.024.275M17.513 17.04a.75.75 0 0 1 1.024-.274l2.846 1.641a.75.75 0 1 1-.75 1.3l-2.845-1.642a.75.75 0 0 1-.275-1.025M12.246 3.154a.75.75 0 0 1 .75.75v3.4a.75.75 0 0 1-1.5 0v-3.4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangle3Outline;
