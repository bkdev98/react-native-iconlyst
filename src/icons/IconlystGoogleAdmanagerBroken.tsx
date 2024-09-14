import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdmanagerBroken = ({
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
      strokeWidth={1.5}
      d="M17.543 9.76A1.658 1.658 0 0 0 15.2 7.415L8.165 14.45a1.658 1.658 0 1 0 2.345 2.344l5.275-5.275"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.7 10.913a1.658 1.658 0 1 1 2.345 2.345 1.658 1.658 0 0 1-2.345-2.345ZM5.994 8.76l-1.758 1.76a1.658 1.658 0 1 0 2.344 2.344l7.034-7.034a1.658 1.658 0 0 0-2.345-2.344l-3.11 3.11"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.269 3.486a1.658 1.658 0 1 1 2.344 2.344 1.658 1.658 0 0 1-2.344-2.344ZM19.506 15.239l1.758-1.759a1.658 1.658 0 0 0-2.344-2.344l-7.034 7.034a1.658 1.658 0 1 0 2.345 2.344l3.146-3.146"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.886 18.17a1.658 1.658 0 1 1 2.345 2.343 1.658 1.658 0 0 1-2.345-2.344Z"
    />
  </Svg>
);
export default IconlystGoogleAdmanagerBroken;
