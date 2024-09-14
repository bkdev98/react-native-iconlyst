import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServer2Outline = ({
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
      d="M3 12a3.75 3.75 0 0 1 3.75-3.75h11a3.75 3.75 0 1 1 0 7.5h-11A3.75 3.75 0 0 1 3 12m3.75-2.25a2.25 2.25 0 0 0 0 4.5h11a2.25 2.25 0 0 0 0-4.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.133 12a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.002a.75.75 0 0 1-.75-.75M12.545 12a.75.75 0 0 1 .75-.75h2.4a.75.75 0 0 1 0 1.5h-2.4a.75.75 0 0 1-.75-.75M3 18a3.75 3.75 0 0 1 3.75-3.75h11a3.75 3.75 0 1 1 0 7.5h-11A3.75 3.75 0 0 1 3 18m3.75-2.25a2.25 2.25 0 0 0 0 4.5h11a2.25 2.25 0 0 0 0-4.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.133 18a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.002a.75.75 0 0 1-.75-.75M12.545 18a.75.75 0 0 1 .75-.75h2.4a.75.75 0 0 1 0 1.5h-2.4a.75.75 0 0 1-.75-.75M3 6a3.75 3.75 0 0 1 3.75-3.75h11a3.75 3.75 0 1 1 0 7.5h-11A3.75 3.75 0 0 1 3 6m3.75-2.25a2.25 2.25 0 0 0 0 4.5h11a2.25 2.25 0 0 0 0-4.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.133 6a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.002a.75.75 0 0 1-.75-.75M12.545 6a.75.75 0 0 1 .75-.75h2.4a.75.75 0 0 1 0 1.5h-2.4a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServer2Outline;
