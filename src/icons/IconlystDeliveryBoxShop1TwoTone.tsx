import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxShop1TwoTone = ({
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
      d="m11.824 12.548 4.107.01c1.436.003 2.332-1.008 2.335-2.442l.009-3.87c.003-1.433-.887-2.45-2.323-2.452l-4.106-.01c-1.436-.003-2.331 1.008-2.335 2.442l-.009 3.869c-.004 1.435.891 2.45 2.322 2.453"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.855 3.248 2.024.35.937 11.163a1.753 1.753 0 0 0 1.752 1.608h10.615a1.75 1.75 0 0 0 1.736-1.504l.924-6.38M8.146 20.246v.118m.48-.093a.481.481 0 1 1-.964 0 .481.481 0 0 1 .963 0M19.172 20.246v.118m.479-.093a.481.481 0 1 1-.963 0 .481.481 0 0 1 .963 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.111 6.71h1.55"
    />
  </Svg>
);
export default IconlystDeliveryBoxShop1TwoTone;
