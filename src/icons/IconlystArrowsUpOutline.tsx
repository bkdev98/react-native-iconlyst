import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsUpOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.783 2.469a.75.75 0 0 1 1.059 0l3.187 3.176a.75.75 0 0 1-1.058 1.063l-1.908-1.902V21a.75.75 0 0 1-1.5 0V4.806l-1.909 1.902a.75.75 0 1 1-1.058-1.063zM6.158 2.469a.75.75 0 0 1 1.059 0l3.187 3.176a.75.75 0 0 1-1.058 1.063L7.438 4.806V21a.75.75 0 0 1-1.5 0V4.806L4.029 6.708a.75.75 0 1 1-1.058-1.063z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsUpOutline;
