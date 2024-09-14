import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarUnlockOutline = ({
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
      d="M16.769 17.202a.703.703 0 0 0-.703.703v1.642c0 .388.315.703.703.703h2.926a.703.703 0 0 0 .703-.703v-1.642a.703.703 0 0 0-.703-.703zm-2.203.703c0-1.216.986-2.203 2.202-2.203h2.927c1.217 0 2.203.987 2.203 2.203v1.642a2.203 2.203 0 0 1-2.203 2.203h-2.927a2.203 2.203 0 0 1-2.202-2.203z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.201 12.923a2.5 2.5 0 0 1 1.658.603.75.75 0 0 1-.978 1.138.997.997 0 0 0-1.645.734v1.08a.75.75 0 1 1-1.5 0v-1.1a2.5 2.5 0 0 1 2.465-2.455M13.57 11.048a.75.75 0 0 1 .75-.75h1.573a.75.75 0 0 1 0 1.5h-1.572a.75.75 0 0 1-.75-.75M5.801 11.048a.75.75 0 0 1 .75-.75h1.573a.75.75 0 0 1 0 1.5H6.55a.75.75 0 0 1-.75-.75M2.613 7.28a.75.75 0 0 1 .848-.638c5.146.73 10.368.73 15.514 0a.75.75 0 1 1 .21 1.485c-5.285.75-10.65.75-15.934 0a.75.75 0 0 1-.638-.848"
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
export default IconlystCarUnlockOutline;
