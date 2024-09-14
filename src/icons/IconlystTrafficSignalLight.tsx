import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrafficSignalLight = ({
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
      d="M16.813 6.36h2.881c-.052.7-.7 2.1-2.881 2.1M7.687 6.36H4.806c.051.7.7 2.1 2.881 2.1M16.813 15.361h2.881c-.052.7-.7 2.101-2.881 2.101M7.687 15.361H4.806c.051.7.7 2.101 2.881 2.101M16.813 10.86h2.881c-.052.7-.7 2.101-2.881 2.101M7.687 10.86H4.806c.051.7.7 2.101 2.881 2.101"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.478 3.885h3.544a2.79 2.79 0 0 1 2.791 2.79v10.621a2.79 2.79 0 0 1-2.79 2.79h-3.545a2.79 2.79 0 0 1-2.79-2.79V6.676a2.79 2.79 0 0 1 2.79-2.791M11.125 20.135v1.75M13.376 20.135v1.75"
    />
    <Circle
      cx={12.25}
      cy={7.485}
      r={1.125}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={12.25}
      cy={11.986}
      r={1.125}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={12.25}
      cy={16.486}
      r={1.125}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystTrafficSignalLight;
