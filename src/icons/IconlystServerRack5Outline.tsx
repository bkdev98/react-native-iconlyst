import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack5Outline = ({
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
      d="M6.976 14.37a2.94 2.94 0 0 0 0 5.88h10.548a2.94 2.94 0 0 0 0-5.88zm-4.44 2.94a4.44 4.44 0 0 1 4.44-4.44h10.548a4.44 4.44 0 0 1 0 8.88H6.976a4.44 4.44 0 0 1-4.44-4.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.898 12.973a.75.75 0 0 1 .75.75v7.175a.75.75 0 1 1-1.5 0v-7.175a.75.75 0 0 1 .75-.75M6.895 17.31a.75.75 0 0 1 .75-.75h1.491a.75.75 0 0 1 0 1.5H7.645a.75.75 0 0 1-.75-.75M6.976 3.75a2.94 2.94 0 0 0 0 5.881h10.548a2.94 2.94 0 0 0 0-5.881zm-4.44 2.94a4.44 4.44 0 0 1 4.44-4.44h10.548a4.44 4.44 0 0 1 0 8.881H6.976a4.44 4.44 0 0 1-4.44-4.44"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.898 2.354a.75.75 0 0 1 .75.75v7.175a.75.75 0 1 1-1.5 0V3.104a.75.75 0 0 1 .75-.75M6.895 6.69a.75.75 0 0 1 .75-.75h1.491a.75.75 0 0 1 0 1.5H7.645a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerRack5Outline;
