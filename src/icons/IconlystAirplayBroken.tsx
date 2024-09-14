import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirplayBroken = ({
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
      d="M7.112 16.718a4.03 4.03 0 0 1-4.028-4.03V7.233a4.03 4.03 0 0 1 4.028-4.029h4.972M17.055 16.718a4.03 4.03 0 0 0 4.03-4.03V7.233a4.03 4.03 0 0 0-4.03-4.029h-1.486M9.346 20.797a.78.78 0 0 1-.674-1.169l2.754-4.773a.778.778 0 0 1 1.35.004l2.721 4.773a.78.78 0 0 1-.677 1.165h-2.737"
    />
  </Svg>
);
export default IconlystAirplayBroken;
