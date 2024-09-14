import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinterestBulk = ({
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
      d="M16.217 2.375H7.783c-3.16 0-5.283 2.222-5.283 5.53v7.939c0 3.308 2.123 5.531 5.283 5.531h8.433c3.16 0 5.284-2.223 5.284-5.531V7.905c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.135 17.858a3.46 3.46 0 0 1-2.61-1.1 3.32 3.32 0 0 1-.746-2.813.75.75 0 0 1 1.48.244 1.82 1.82 0 0 0 .384 1.568 1.98 1.98 0 0 0 1.632.594c1.992-.1 3.067-2.043 3.067-3.814a3.977 3.977 0 0 0-4.178-3.943c-2.49 0-4.516 1.745-4.516 3.89 0 .329.048.656.143.971q.11.366.295.7a.75.75 0 1 1-1.313.726 4.877 4.877 0 0 1-.62-2.4c0-2.972 2.7-5.39 6.016-5.39a5.44 5.44 0 0 1 5.678 5.443c0 2.461-1.573 5.16-4.488 5.312a2 2 0 0 1-.224.012"
    />
    <Path
      fill={props.color}
      d="M8.926 21.626a.748.748 0 0 1-.732-.92l2.16-9.213a.75.75 0 1 1 1.461.342l-2.16 9.213a.75.75 0 0 1-.729.578"
    />
  </Svg>
);
export default IconlystPinterestBulk;
