import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMeatTwoTone = ({
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
      d="M11.135 13.225c-2.602-2.6-5.768-3.651-7.074-2.345s-.255 4.471 2.346 7.073c2.602 2.601 5.768 3.652 7.074 2.346s.255-4.473-2.346-7.074"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.912 8.092 1.644-1.644c-.415-.331-.69-.85-.69-1.436 0-1.03.841-1.872 1.872-1.872 1.04 0 1.928 1.086 1.57 2.193 1.095-.369 2.191.52 2.191 1.56 0 1.039-.84 1.88-1.88 1.88a1.86 1.86 0 0 1-1.437-.69l-1.71 1.711"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.16 10.782c3.751-3.751 8.9-4.684 11.502-2.083 2.6 2.602 1.669 7.751-2.082 11.502"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.848 14.668a4.18 4.18 0 0 1 1.844 1.844"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystMeatTwoTone;
