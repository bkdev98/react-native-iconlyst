import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirplayTwoTone = ({
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
      d="M17.305 16.718a4.03 4.03 0 0 0 4.029-4.03V7.233a4.03 4.03 0 0 0-4.03-4.029H7.363a4.03 4.03 0 0 0-4.028 4.03v5.456a4.03 4.03 0 0 0 4.028 4.029"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.596 20.797h5.474a.78.78 0 0 0 .677-1.165l-2.72-4.773a.778.778 0 0 0-1.35-.004l-2.755 4.773a.78.78 0 0 0 .674 1.169"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAirplayTwoTone;
