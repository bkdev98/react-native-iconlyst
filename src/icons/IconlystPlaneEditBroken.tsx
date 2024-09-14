import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneEditBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.367 20.204h7.686"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.21 20.204-.76.127a.85.85 0 0 1-.988-.93l.086-.786c.04-.377.199-.734.452-1.017l2.993-3.297a1.043 1.043 0 0 1 1.474-.056l.7.646c.422.391.448 1.052.056 1.475l-2.956 3.256a1.82 1.82 0 0 1-1.058.582"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.643 13.113c1.237-.514 3.68-1.562 4.938-2.086L6.273 5.438c.626-.222 1.197-.481 1.796-.625.7-.167 1.302.15 1.818.601a188 188 0 0 1 3.514 3.136c.292.268.523.294.872.141 1.003-.443 2.01-.884 3.041-1.256 1.192-.431 2.89-.476 3.312 1.028.333 1.186-.69 2.197-1.696 2.622a938 938 0 0 1-4.515 1.892"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.054 11.703c.09.214.438 1.06.528 1.274 1.016 2.383 2.911 3.221 5.306 2.26q1.1-.44 2.196-.888"
    />
  </Svg>
);
export default IconlystPlaneEditBroken;
