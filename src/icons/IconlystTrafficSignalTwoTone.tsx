import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrafficSignalTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.813 5.989h2.881c-.052.7-.7 2.1-2.881 2.1M7.687 5.989H4.806c.051.7.7 2.1 2.881 2.1M16.813 14.99h2.881c-.052.7-.7 2.1-2.881 2.1M7.687 14.99H4.806c.051.7.7 2.1 2.881 2.1M16.813 10.49h2.881c-.052.7-.7 2.1-2.881 2.1M7.687 10.49H4.806c.051.7.7 2.1 2.881 2.1"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.478 3.514h3.544a2.79 2.79 0 0 1 2.791 2.79v10.621a2.79 2.79 0 0 1-2.79 2.79h-3.545a2.79 2.79 0 0 1-2.79-2.79V6.305a2.79 2.79 0 0 1 2.79-2.791"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.125 19.764v1.75M13.376 19.764v1.75"
      opacity={0.4}
    />
    <Circle
      cx={12.25}
      cy={7.114}
      r={1.125}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={12.25}
      cy={11.615}
      r={1.125}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
    <Circle
      cx={12.25}
      cy={16.115}
      r={1.125}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTrafficSignalTwoTone;
