import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHurricaneTwoTone = ({
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
      d="M4.675 4.935c0 1.068 2.73 1.935 6.1 1.935s6.1-.867 6.1-1.935S14.144 3 10.775 3c-3.37 0-6.1.866-6.1 1.935"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.563 8.48c1.767.254 2.996.819 2.996 1.474 0 .894-2.284 1.619-5.102 1.619-1.456 0-2.77-.194-3.7-.504M10.921 17.321c-3.369 0-6.1-.866-6.1-1.935 0-.67 1.077-1.262 2.713-1.609"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.673 4.905C4.52 10.151 10.006 15.457 9.296 21c9.575-4.397 6.083-10.448 7.552-15.842"
    />
  </Svg>
);
export default IconlystHurricaneTwoTone;
