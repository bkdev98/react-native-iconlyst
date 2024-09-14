import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpLeftScanOutline = ({
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
      d="M8.732 8.733a.75.75 0 0 1 .531-.22l4.278.01a.75.75 0 0 1-.004 1.5l-2.46-.005 4.19 4.19a.75.75 0 1 1-1.061 1.06l-4.191-4.19.004 2.464a.75.75 0 1 1-1.5.002l-.007-4.279c0-.2.078-.39.22-.532M15.1 3a.75.75 0 0 1 .75-.75h1.257a4.64 4.64 0 0 1 4.643 4.643V8.47a.75.75 0 0 1-1.5 0V6.893a3.14 3.14 0 0 0-3.143-3.143H15.85A.75.75 0 0 1 15.1 3M6.893 3.75A3.14 3.14 0 0 0 3.75 6.893V8.47a.75.75 0 0 1-1.5 0V6.893A4.64 4.64 0 0 1 6.893 2.25h1.29a.75.75 0 0 1 0 1.5zM3 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.15a.75.75 0 0 1 0 1.5H6.893a4.64 4.64 0 0 1-4.643-4.642v-1.577a.75.75 0 0 1 .75-.75M21 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.642 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpLeftScanOutline;
