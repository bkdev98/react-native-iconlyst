import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrailerOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.324 16.53a1.477 1.477 0 1 0 0 2.955 1.477 1.477 0 0 0 0-2.955m-2.977 1.478a2.977 2.977 0 1 1 5.954 0 2.977 2.977 0 0 1-5.954 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.801 18.008a.75.75 0 0 1 .75-.75h8.117a.75.75 0 0 1 .65.376L22.4 19.52a.75.75 0 0 1-1.3.746l-.866-1.508H12.55a.75.75 0 0 1-.75-.75M7.549 9.183l-.416 2.326h7.357V9.183zm-1.443-.45a1.274 1.274 0 0 1 1.254-1.05h7.356c.704 0 1.274.57 1.274 1.274v2.778c0 .703-.57 1.274-1.274 1.274H6.863a1.274 1.274 0 0 1-1.255-1.499z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.928 7.683a.75.75 0 0 1 .75.75v3.826a.75.75 0 0 1-1.5 0V8.433a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.238 6.285c-.657 0-1.218.474-1.327 1.123l-1.392 8.28a1.346 1.346 0 0 0 1.328 1.57h3.248a.75.75 0 0 1 0 1.5H4.847A2.846 2.846 0 0 1 2.04 15.44L3.43 7.159a2.846 2.846 0 0 1 2.807-2.374h10.007a2.846 2.846 0 0 1 2.846 2.846v10.311a.75.75 0 0 1-1.5 0V7.631c0-.744-.603-1.346-1.346-1.346z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTrailerOutline;
