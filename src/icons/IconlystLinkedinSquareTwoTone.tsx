import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkedinSquareTwoTone = ({
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
      d="M7.883 10.992V15.8M11.161 15.801v-3.37a2.533 2.533 0 0 1 5.065 0v3.37M7.884 8.302v.027m.108-.02a.109.109 0 1 1-.218-.001.109.109 0 0 1 .218 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 5.389c0-1.043.846-1.889 1.889-1.889H18.61c1.043 0 1.889.846 1.889 1.889V18.61a1.89 1.89 0 0 1-1.889 1.889H5.39A1.89 1.89 0 0 1 3.5 18.611z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLinkedinSquareTwoTone;
