import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCraftAppCircleLight = ({
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
    <Circle
      cx={12}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.546 7.5a4.5 4.5 0 1 0 0 9M11.546 12h-4.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.546 12a4.54 4.54 0 0 0 3.182-1.318c.48-.481.845-1.07 1.067-1.71.272-.783-.42-1.472-1.25-1.472h-3zM11.546 12a4.54 4.54 0 0 1 3.182 1.318c.48.481.845 1.07 1.067 1.71.272.783-.42 1.472-1.25 1.472h-3z"
    />
  </Svg>
);
export default IconlystCraftAppCircleLight;
