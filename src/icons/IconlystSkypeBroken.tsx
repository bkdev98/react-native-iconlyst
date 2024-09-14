import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSkypeBroken = ({
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
      d="M21.203 11.534a8.7 8.7 0 0 1-.113 1.934 5.08 5.08 0 0 1 .561 3.493 5.05 5.05 0 0 1-2.172 3.213c-1.54 1.037-3.657 1.095-5.261.166-1.787.307-3.671.041-5.287-.784a8.5 8.5 0 0 1-4.11-4.585 8.57 8.57 0 0 1-.412-4.44 5.08 5.08 0 0 1-.547-3.557c.258-1.226 1-2.34 2.025-3.058 1.55-1.119 3.742-1.214 5.394-.258 1.86-.322 3.83-.015 5.49.89a8.5 8.5 0 0 1 3.481 3.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.574 11.75c-.741-.144-1.285-.894-1.285-1.774 0-1.092.854-1.976 2.564-1.976 1.22 0 2.238.66 2.496 1.54M10.356 14.436c.258.88 1.276 1.54 2.497 1.54 1.703 0 2.558-.878 2.564-1.964m0 0V14v.025zm0 0c-.005-.874-.547-1.619-1.285-1.762"
    />
  </Svg>
);
export default IconlystSkypeBroken;
