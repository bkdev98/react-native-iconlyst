import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiRecognitionOutline = ({
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
      d="M6.893 3.75A3.14 3.14 0 0 0 3.75 6.892v1.577a.75.75 0 1 1-1.5 0V6.892A4.64 4.64 0 0 1 6.893 2.25h1.29a.75.75 0 0 1 0 1.5zM3 14.781a.75.75 0 0 1 .75.75v1.577a3.14 3.14 0 0 0 3.143 3.142H8.15a.75.75 0 0 1 0 1.5H6.893a4.64 4.64 0 0 1-4.643-4.642v-1.577a.75.75 0 0 1 .75-.75M21 14.781a.75.75 0 0 1 .75.75v1.577a4.64 4.64 0 0 1-4.642 4.642h-1.29a.75.75 0 1 1 0-1.5h1.29a3.14 3.14 0 0 0 3.142-3.142v-1.577a.75.75 0 0 1 .75-.75M15.1 3a.75.75 0 0 1 .75-.75h1.257a4.64 4.64 0 0 1 4.643 4.642v1.577a.75.75 0 1 1-1.5 0V6.892a3.14 3.14 0 0 0-3.143-3.142H15.85A.75.75 0 0 1 15.1 3M10.5 8.176a.75.75 0 0 1 .688.442l2.767 6.148a.75.75 0 0 1-1.367.616l-2.074-4.607-2.012 4.6a.75.75 0 1 1-1.375-.602l2.69-6.148a.75.75 0 0 1 .683-.45"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.55 14.242H8.536v-1.5h4.016zM16.238 8.4a.75.75 0 0 1 .75.75v5.922a.75.75 0 0 1-1.5 0V9.15a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiRecognitionOutline;
