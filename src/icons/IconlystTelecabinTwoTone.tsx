import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelecabinTwoTone = ({
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
      d="M16.832 20.998H8.66a3.408 3.408 0 0 1-3.51-3.687v-5.838a3.397 3.397 0 0 1 3.51-3.687h8.173a3.396 3.396 0 0 1 3.519 3.687v5.838a3.4 3.4 0 0 1-.93 2.634 3.4 3.4 0 0 1-2.589 1.053"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.525 17.79h-3.547"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.148 15.04H9.345a1.126 1.126 0 0 1-1.164-1.221v-1.933a1.128 1.128 0 0 1 1.164-1.22h6.803a1.126 1.126 0 0 1 1.163 1.22v1.933a1.12 1.12 0 0 1-1.163 1.22"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.857 4.286 18.643 3m-5.893.638v4.147"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTelecabinTwoTone;
