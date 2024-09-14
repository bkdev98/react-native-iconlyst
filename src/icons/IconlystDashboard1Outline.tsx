import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDashboard1Outline = ({
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
      d="M3.23 13.098c0-5.39 4.365-9.754 9.747-9.754a9.75 9.75 0 0 1 9.753 9.754c0 2.95-1.311 5.59-3.38 7.374a.75.75 0 0 1-.98-1.135 8.25 8.25 0 0 0-5.394-14.493c-4.552 0-8.246 3.692-8.246 8.254a8.21 8.21 0 0 0 2.862 6.239.75.75 0 0 1-.98 1.136 9.71 9.71 0 0 1-3.382-7.375"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.978 11.875a1.221 1.221 0 1 0 .002 2.442 1.221 1.221 0 0 0-.002-2.442m-2.72 1.221a2.72 2.72 0 1 1 5.442 0 2.72 2.72 0 0 1-5.442 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.352 8.74a.75.75 0 0 1 0 1.06l-2.44 2.441a.75.75 0 0 1-1.062-1.06l2.442-2.442a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDashboard1Outline;
