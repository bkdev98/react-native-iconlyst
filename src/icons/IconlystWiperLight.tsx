import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWiperLight = ({
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
      d="m8.725 8.05 3.038 8.81"
    />
    <Circle
      cx={12.25}
      cy={18.069}
      r={1.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21.126 7.972-2.615 7.227a.935.935 0 0 1-1.221.441c-1.287-.59-3.675-.876-5.063-.877-1.388 0-3.777.287-5.063.877A.936.936 0 0 1 5.94 15.2L3.328 7.972c-.23-.458-.059-1.03.396-1.263a18.6 18.6 0 0 1 8.502-2.028c2.92 0 5.839.663 8.502 2.028.456.234.626.805.397 1.263"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.124 12.074c1.197-.208 2.733-.208 4.127.176M16.935 10.203c-1.287-.59-3.675-.877-5.064-.878-.705 0-1.668.075-2.614.225"
    />
  </Svg>
);
export default IconlystWiperLight;
