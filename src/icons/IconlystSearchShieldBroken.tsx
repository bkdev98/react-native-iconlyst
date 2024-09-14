import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchShieldBroken = ({
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
      d="M11.888 3.324a8.423 8.423 0 1 1-3.023.559M17.612 17.91l3.423 3.415"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.113 12.102c0 2.621-3.139 3.571-3.139 3.571s-3.138-.95-3.138-3.57-.114-2.539.138-2.79c.252-.253 2.59-1.067 3-1.067.412 0 3.001 1.066 3.001 1.066"
    />
  </Svg>
);
export default IconlystSearchShieldBroken;
