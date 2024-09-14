import * as React from 'react';
import Svg, { Circle, Ellipse, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasAngelBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Circle
      cx={11.994}
      cy={9.022}
      r={3.068}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Ellipse
      cx={11.262}
      cy={3.602}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.605}
      ry={0.228}
      transform="rotate(-5.727 11.262 3.602)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.788 11.912c-3.153 2.67-3.416 7.45-3.153 9.505 2.316.635 3.938.835 5.803.606M16.343 18.12c3.68-.973 4.642-6.318 4.642-8.41-1.375.917-2.637 1.304-3.682 1.42"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.655 18.12c-3.68-.973-4.642-6.318-4.642-8.41 1.512 1.008 2.887 1.376 3.986 1.447M12.057 15.992v.01M12.057 18.732v.01M17.722 13.916c.505.123 1.674.295 2.317 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.106 13.916c-.504.123-1.674.295-2.316 0M16.332 21.417c.263-2.055 0-6.834-3.153-9.505"
    />
  </Svg>
);
export default IconlystChristmasAngelBroken;
