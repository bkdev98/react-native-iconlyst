import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystProjectorScreenOutline = ({
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
      d="M14.256 14.168a4.742 4.742 0 1 1-.002-9.484 4.742 4.742 0 0 1 .002 9.484m0-7.983a3.242 3.242 0 1 0-.002 6.483 3.242 3.242 0 0 0 .002-6.483"
    />
    <Path
      fill={props.color}
      d="m18.63 17.78-12.753-.007a3.295 3.295 0 0 1-3.377-3.5v-3.456a3.293 3.293 0 0 1 3.378-3.5h4.472a.75.75 0 0 1 0 1.5H5.878a1.8 1.8 0 0 0-1.878 2v3.456a1.8 1.8 0 0 0 1.878 2l12.753.008a1.8 1.8 0 0 0 1.869-2.013v-3.456a1.802 1.802 0 0 0-1.87-2H18a.75.75 0 1 1 0-1.5h.63a3.29 3.29 0 0 1 3.37 3.5v3.456a3.294 3.294 0 0 1-3.37 3.513"
    />
    <Path
      fill={props.color}
      d="M15.94 9.545a.75.75 0 0 1-.7-.487 1.06 1.06 0 0 0-.575-.6.752.752 0 0 1 .583-1.383 2.56 2.56 0 0 1 1.4 1.456.75.75 0 0 1-.708 1.014M7.39 12.584h-.94a.75.75 0 1 1 0-1.5h.94a.75.75 0 0 1 0 1.5M5.749 19.317a.75.75 0 0 1-.647-1.13l.9-1.538a.752.752 0 1 1 1.3.758l-.9 1.539a.75.75 0 0 1-.653.37M18.694 19.317a.75.75 0 0 1-.648-.371l-.9-1.54a.752.752 0 1 1 1.3-.757l.9 1.539a.751.751 0 0 1-.647 1.129z"
    />
  </Svg>
);
export default IconlystProjectorScreenOutline;
