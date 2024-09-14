import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownLeftBoxTwoTone = ({
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
      d="M10.731 4.25h-1.98C6.138 4.25 4.5 6.1 4.5 8.718v7.064c0 2.618 1.63 4.468 4.25 4.468h7.498c2.62 0 4.252-1.85 4.252-4.468v-1.547"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.244 7.2v4.304m0 0h4.305m-4.305 0 6.75-6.75"
    />
  </Svg>
);
export default IconlystDownLeftBoxTwoTone;
