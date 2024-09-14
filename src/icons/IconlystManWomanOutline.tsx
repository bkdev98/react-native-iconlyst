import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystManWomanOutline = ({
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
      d="M17.5 3.578a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0V5.39l-1.64 1.64a5.777 5.777 0 0 1-7.581 8.46 5.8 5.8 0 0 1-2.195.783v1.557h1.21a.75.75 0 1 1 0 1.5h-1.21v1.092a.75.75 0 0 1-1.5 0V19.33H6.352a.75.75 0 0 1 0-1.5h1.232v-1.542A5.778 5.778 0 1 1 11.279 5.61a5.75 5.75 0 0 1 3-.839A5.757 5.757 0 0 1 17.8 5.97l1.639-1.64h-1.19a.75.75 0 0 1-.75-.75M8.3 14.83a4.26 4.26 0 0 1-3.047-1.254 4.278 4.278 0 0 1 4.769-6.933A5.76 5.76 0 0 0 8.52 11.04a5.76 5.76 0 0 0 1.502 3.419 4.3 4.3 0 0 1-1.672.37H8.3m1.7-4.28q0-.411.075-.801A4.27 4.27 0 0 1 11.278 7.5l.025.025q.335.336.58.72a4.28 4.28 0 0 1-.58 5.33l-.025.025A4.26 4.26 0 0 1 10 10.55m2.535 3.908a5.78 5.78 0 0 0 0-7.815 4.3 4.3 0 0 1 1.723-.37h.02a4.278 4.278 0 1 1-1.743 8.185"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystManWomanOutline;
