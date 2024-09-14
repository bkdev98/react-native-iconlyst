import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletOutline = ({
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
      d="M16.93 21.058H7.57a5.077 5.077 0 0 1-5.07-5.07v-7.98a5.077 5.077 0 0 1 5.07-5.07h9.36A5.076 5.076 0 0 1 22 8.008v7.982a5.076 5.076 0 0 1-5.07 5.068M7.57 4.436A3.575 3.575 0 0 0 4 8.006v7.982a3.575 3.575 0 0 0 3.57 3.57h9.36a3.574 3.574 0 0 0 3.57-3.57v-7.98a3.574 3.574 0 0 0-3.57-3.57z"
    />
    <Path
      fill={props.color}
      d="M16.031 16.549a2.54 2.54 0 1 1 0-5.08 2.54 2.54 0 0 1 0 5.08m0-3.58a1.04 1.04 0 1 0 0 2.08 1.04 1.04 0 0 0 0-2.08M17.393 10.18a.75.75 0 0 1-.637-.352l-1.373-2.19a2.523 2.523 0 0 0-3.47-.806L6.924 9.955a.77.77 0 0 1-.432.14.755.755 0 0 1-.652-1.132.75.75 0 0 1 .283-.276l4.993-3.127a4.027 4.027 0 0 1 5.538 1.282l1.373 2.189a.752.752 0 0 1-.635 1.149"
    />
    <Path
      fill={props.color}
      d="M21.25 10.18h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystCardWalletOutline;
