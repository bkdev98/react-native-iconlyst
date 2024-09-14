import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconOutline = ({
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
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25A8.25 8.25 0 0 0 20.5 12a8.25 8.25 0 0 0-8.25-8.25M2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.182 15.203a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M16.232 7.152a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M12.198 9.346a2.71 2.71 0 0 0-2.712 2.704c0 .406.084.78.235 1.1a.75.75 0 0 1-1.357.64 4.1 4.1 0 0 1-.378-1.74 4.21 4.21 0 0 1 4.212-4.204c.604 0 1.198.126 1.732.378a.75.75 0 1 1-.638 1.357 2.6 2.6 0 0 0-1.094-.235M14.982 9.868a.75.75 0 0 1 1.004.343 4.212 4.212 0 0 1-3.789 6.051 4.1 4.1 0 0 1-1.844-.425.75.75 0 1 1 .67-1.342c.344.171.744.267 1.174.267a2.712 2.712 0 0 0 2.442-3.89.75.75 0 0 1 .343-1.004"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystIconOutline;
