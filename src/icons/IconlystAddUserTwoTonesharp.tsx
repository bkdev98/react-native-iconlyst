import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddUserTwoTonesharp = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.293 8.669v4.01M21.338 10.674h-4.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M10.205 14.819c3.256-.008 6.025 1.487 7.043 4.705-2.052 1.25-4.466 1.732-7.043 1.726-2.577.006-4.992-.475-7.043-1.726 1.019-3.222 3.783-4.714 7.043-4.705Z"
      opacity={0.4}
    />
    <Circle
      cx={10.17}
      cy={7.17}
      r={4.42}
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystAddUserTwoTonesharp;
