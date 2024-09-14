import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLowTideTwoTone = ({
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
      d="M3.055 17.013a3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0M3.055 20.502a3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0 3.49 3.49 0 0 1 3.6 0 3.49 3.49 0 0 0 3.6 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.256 8.313c.021-.011.047.008.04.032a4.33 4.33 0 0 1-4.158 3.138 4.326 4.326 0 0 1-1.192-8.484c.023-.007.043.019.031.04a3.91 3.91 0 0 0 .692 4.587 3.9 3.9 0 0 0 4.587.687"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m2.857 12.364 1.555 1.555m0 0 1.557-1.555M4.412 13.92l.001-3.838M17.943 12.364l1.555 1.555m0 0 1.556-1.555m-1.556 1.555.001-3.838"
    />
  </Svg>
);
export default IconlystLowTideTwoTone;
