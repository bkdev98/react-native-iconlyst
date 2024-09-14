import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpenCheckOutline = ({
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
      d="M15.407 20.67H7.393a4.82 4.82 0 0 1-3.6-1.334 4.65 4.65 0 0 1-1.291-3.387v-5.283a3.548 3.548 0 0 1 1.509-2.893l5.567-3.875a3.15 3.15 0 0 1 3.629 0l2.388 1.656a.75.75 0 1 1-.856 1.233l-2.392-1.66a1.65 1.65 0 0 0-1.908 0L4.868 9.005a2.05 2.05 0 0 0-.611.684 2 2 0 0 0-.255.978v5.283a3.19 3.19 0 0 0 .85 2.323 3.47 3.47 0 0 0 2.519.9h8.034a3.48 3.48 0 0 0 2.525-.9 3.2 3.2 0 0 0 .849-2.323v-1.531a.75.75 0 0 1 1.5 0v1.53a4.65 4.65 0 0 1-1.291 3.387 4.93 4.93 0 0 1-3.581 1.334"
    />
    <Path
      fill={props.color}
      d="M11.418 15.508a3.8 3.8 0 0 1-2.362-.825L3.133 9.909a.75.75 0 0 1 .941-1.168L9.99 13.51a2.3 2.3 0 0 0 2.856 0l.68-.55a.75.75 0 1 1 .943 1.166l-.685.553a3.8 3.8 0 0 1-2.366.829"
    />
    <Path
      fill={props.color}
      d="M16.94 15.464a5.063 5.063 0 1 1 0-10.125 5.063 5.063 0 0 1 0 10.125m0-8.623a3.562 3.562 0 1 0 0 7.124 3.562 3.562 0 0 0 0-7.124"
    />
    <Path
      fill={props.color}
      d="M17.18 11.822a.75.75 0 0 1-.53-.22l-1.474-1.476a.75.75 0 1 1 1.06-1.061l.944.945 2.509-2.508a.75.75 0 0 1 1.06 1.06l-3.038 3.04a.75.75 0 0 1-.53.22"
    />
  </Svg>
);
export default IconlystEmailOpenCheckOutline;
