import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserBadgeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.646 3-2.068 2.068H8.53c-2.61 0-4.235 1.838-4.235 4.446v7.038C4.294 19.162 5.91 21 8.529 21h8.242c2.61 0 4.236-1.838 4.236-4.448V9.514c0-2.608-1.626-4.446-4.236-4.446h-2.058z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.01 20.927v-.814c0-1.514 1.198-3.402 4.636-3.402 3.446 0 4.645 1.871 4.645 3.385v.83"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.61 11.584a2.962 2.962 0 1 1-5.925 0 2.962 2.962 0 0 1 5.925 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserBadgeTwoTone;
