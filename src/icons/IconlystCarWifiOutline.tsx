import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarWifiOutline = ({
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
      d="M17.485 20.209a.75.75 0 0 1 .75.75v.04a.75.75 0 1 1-1.5 0v-.04a.75.75 0 0 1 .75-.75M20.68 17.115a5.12 5.12 0 0 0-6.388 0 .75.75 0 0 1-.938-1.17 6.62 6.62 0 0 1 8.263 0 .75.75 0 0 1-.938 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.867 19.361a2.14 2.14 0 0 0-2.76.003.75.75 0 1 1-.974-1.141 3.64 3.64 0 0 1 4.7-.008.75.75 0 0 1-.966 1.146M13.57 11.049a.75.75 0 0 1 .75-.75h1.573a.75.75 0 0 1 0 1.5h-1.572a.75.75 0 0 1-.75-.75M5.801 11.049a.75.75 0 0 1 .75-.75h1.573a.75.75 0 0 1 0 1.5H6.55a.75.75 0 0 1-.75-.75M2.613 7.28a.75.75 0 0 1 .848-.638c5.146.73 10.368.73 15.514 0a.75.75 0 1 1 .21 1.485c-5.285.75-10.65.75-15.934 0a.75.75 0 0 1-.638-.848"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.54 2.54a23.7 23.7 0 0 1 7.381 0h.003a2.71 2.71 0 0 1 2.1 1.755l.916 2.546a.8.8 0 0 0 .098.19l1.018 1.364c.513.7.79 1.547.79 2.415a.75.75 0 0 1-1.5.001c0-.549-.175-1.084-.499-1.527L16.83 7.918l-.01-.015a2.3 2.3 0 0 1-.289-.551V7.35l-.92-2.555a1.21 1.21 0 0 0-.924-.774c-2.29-.361-4.62-.361-6.91 0-.41.069-.778.38-.916.773l-.002.007-.922 2.56q-.11.289-.293.537L4.609 9.32a2.56 2.56 0 0 0-.486 1.505v.004l-.015 4.554c0 .069.056.125.125.125h1.734a.125.125 0 0 0 .124-.125v-.358c0-.898.728-1.625 1.625-1.625h4.308a.75.75 0 0 1 0 1.5H7.716a.125.125 0 0 0-.125.125v.358c0 .898-.727 1.625-1.624 1.625H4.233c-.9 0-1.627-.73-1.625-1.63l.015-4.55v-.002a4.06 4.06 0 0 1 .771-2.386l1.043-1.436a.7.7 0 0 0 .094-.17l.914-2.54A2.71 2.71 0 0 1 7.533 2.54z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarWifiOutline;
