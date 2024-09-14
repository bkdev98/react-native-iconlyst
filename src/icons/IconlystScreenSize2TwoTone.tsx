import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreenSize2TwoTone = ({
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
      d="M21.334 15.414v2.511A3.075 3.075 0 0 1 18.258 21h-2.51M3.334 15.414v2.511A3.075 3.075 0 0 0 6.41 21h2.51"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.334 8.587V6.076A3.075 3.075 0 0 1 6.41 3h2.51M21.334 8.587V6.076A3.075 3.075 0 0 0 18.258 3h-2.51"
    />
  </Svg>
);
export default IconlystScreenSize2TwoTone;
