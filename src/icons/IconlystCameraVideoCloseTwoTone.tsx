import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraVideoCloseTwoTone = ({
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
      d="M6.184 4.754h6.79c2.373 0 3.851 1.676 3.851 4.047v6.397c0 2.371-1.478 4.047-3.852 4.047h-6.79c-2.373 0-3.849-1.676-3.849-4.047V8.801c0-2.371 1.483-4.047 3.85-4.047M11.178 13.59l-3.18-3.18m0 3.18 3.18-3.18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.818 9.99 3.407-2.788a1.292 1.292 0 0 1 2.11 1l-.013 7.602a1.291 1.291 0 0 1-2.11.995l-3.394-2.787"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCameraVideoCloseTwoTone;
