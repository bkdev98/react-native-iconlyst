import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.335 11.186c-.483 1.2-1.496 2.777-2.286 3.649q-1.047 1.193-2.096 0c-.79-.872-1.802-2.45-2.285-3.649-.317-.975.099-1.537 1.197-1.714a19 19 0 0 1 2.136-.11q1.103-.006 2.136.11c1.102.171 1.507.74 1.198 1.714"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownCircleLight;
