import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageTickBroken = ({
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
      d="m3.006 15.573 3.949-2.867a3.86 3.86 0 0 1 4.816.225l7.694 6.903"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 15.475c-.839-.77-2.145-1.999-3.92-1.043a28 28 0 0 0-2.174 1.316M7.778 20.996C4.833 20.996 3 18.919 3 15.974V8.027c0-2.944 1.843-5.021 4.778-5.021h4.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 10.953v5.023c0 2.944-1.843 5.021-4.788 5.021h-4.217M14.64 6.247l2.037 2.036L20.75 4.21"
    />
  </Svg>
);
export default IconlystImageTickBroken;
