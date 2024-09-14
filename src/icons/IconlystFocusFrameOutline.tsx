import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFocusFrameOutline = ({
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
      d="M15.35 3a.75.75 0 0 1 .75-.75h1.257A4.64 4.64 0 0 1 22 6.893V8.47a.75.75 0 1 1-1.5 0V6.893a3.14 3.14 0 0 0-3.143-3.143H16.1a.75.75 0 0 1-.75-.75M7.143 3.75A3.14 3.14 0 0 0 4 6.893V8.47a.75.75 0 0 1-1.5 0V6.893A4.64 4.64 0 0 1 7.143 2.25h1.29a.75.75 0 0 1 0 1.5zM3.25 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.4a.75.75 0 0 1 0 1.5H7.143A4.64 4.64 0 0 1 2.5 17.108v-1.577a.75.75 0 0 1 .75-.75M21.25 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.643 4.642h-1.29a.75.75 0 0 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M9.961 8.352c-.75 0-1.358.608-1.358 1.358v4.579c0 .75.608 1.358 1.358 1.358h4.579c.75 0 1.358-.608 1.358-1.358V9.71c0-.75-.608-1.358-1.358-1.358zM7.103 9.71A2.86 2.86 0 0 1 9.96 6.852h4.579a2.86 2.86 0 0 1 2.858 2.858v4.579a2.86 2.86 0 0 1-2.858 2.858H9.96a2.86 2.86 0 0 1-2.858-2.858z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 6.855a.75.75 0 0 1 .75.75v8.793a.75.75 0 0 1-1.5 0V7.605a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.103 12a.75.75 0 0 1 .75-.75h8.791a.75.75 0 0 1 0 1.5H7.853a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFocusFrameOutline;
