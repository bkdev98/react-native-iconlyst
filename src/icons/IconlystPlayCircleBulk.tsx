import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayCircleBulk = ({
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
      d="M12.57 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.607 13.698.005-.004c.511-.474.791-1.08.789-1.704s-.285-1.221-.79-1.684a10.5 10.5 0 0 0-3.121-1.978c-.644-.275-1.333-.249-1.888.069-.548.314-.898.863-.988 1.559a19.2 19.2 0 0 0 .001 4.094c.083.681.423 1.229.955 1.545.3.178.639.267.996.267.296 0 .604-.061.913-.184a10.6 10.6 0 0 0 3.128-1.98m-4.018-4.059q.151 0 .322.072a9 9 0 0 1 2.685 1.7c.138.127.304.331.305.585 0 .256-.166.465-.307.596a9.1 9.1 0 0 1-2.674 1.694c-.238.094-.446.101-.585.018-.166-.098-.216-.316-.23-.422a17.7 17.7 0 0 1-.002-3.747c.019-.146.077-.34.245-.437a.5.5 0 0 1 .24-.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayCircleBulk;
