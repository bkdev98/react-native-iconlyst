import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAirbnbBroken = ({
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
      d="M10.867 15.97c-.498-.708-.853-1.488-.853-2.375a2.736 2.736 0 0 1 5.472 0c0 1.864-1.565 3.254-2.736 4.495-.633.671-1.6 1.582-2.41 2.054-.656.535-2.992 1.747-5.096-.25-2.104-1.995-.728-4.612-.464-5.143.42-.844 5.163-10.018 5.163-10.018A3.15 3.15 0 0 1 12.75 3c1.23 0 2.282.708 2.807 1.733 0 0 1.939 3.75 3.447 6.676"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.72 14.75c.264.531 1.64 3.149-.464 5.144s-4.44.784-5.097.25c-.808-.473-1.776-1.383-2.409-2.055"
    />
  </Svg>
);
export default IconlystAirbnbBroken;
