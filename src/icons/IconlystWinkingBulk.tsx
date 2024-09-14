import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWinkingBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.721 3 8.026v7.948C3 19.28 5.123 21.5 8.282 21.5h8.434c3.16 0 5.284-2.22 5.284-5.526V8.026C22 4.721 19.877 2.5 16.717 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 17.3c-2.269 0-4.114-1.967-4.114-4.386a.5.5 0 0 1 .5-.5h7.23a.5.5 0 0 1 .5.5c0 2.419-1.846 4.387-4.116 4.387M8.136 8.498a.75.75 0 0 1 .75-.75h1.592a.75.75 0 0 1 0 1.5H8.886a.75.75 0 0 1-.75-.75M14.832 7.839a.977.977 0 0 1 1.668.687.976.976 0 1 1-1.668-.687"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWinkingBulk;
