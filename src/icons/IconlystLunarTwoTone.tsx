import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLunarTwoTone = ({
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
      strokeWidth={1.5}
      d="M16.83 18.493a8.3 8.3 0 0 1-5.141 1.776c-.862 0-1.693-.13-2.475-.374M5.068 16.996a8.3 8.3 0 0 1-1.71-5.058c0-1.802.571-3.47 1.543-4.833M19.664 14.355A8.331 8.331 0 0 0 8.918 4.079"
      opacity={0.4}
    />
    <Ellipse
      cx={18.386}
      cy={16.488}
      stroke={props.color}
      strokeWidth={1.5}
      rx={2.446}
      ry={1.272}
      transform="rotate(126.846 18.386 16.488)"
    />
    <Ellipse
      cx={14.944}
      cy={8.589}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      rx={1.639}
      ry={1.03}
      transform="rotate(-135 14.944 8.589)"
    />
    <Ellipse
      cx={1.432}
      cy={1.03}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      rx={1.432}
      ry={1.03}
      transform="scale(1 -1)rotate(72.655 13.162 -1.36)"
    />
    <Ellipse
      cx={1.33}
      cy={1.03}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      rx={1.33}
      ry={1.03}
      transform="scale(1 -1)rotate(72.655 18 .113)"
    />
    <Ellipse
      cx={6.698}
      cy={5.23}
      stroke={props.color}
      strokeWidth={1.5}
      rx={2.446}
      ry={1.272}
      transform="rotate(143.388 6.698 5.23)"
    />
    <Ellipse
      cx={2.446}
      cy={1.272}
      stroke={props.color}
      strokeWidth={1.5}
      rx={2.446}
      ry={1.272}
      transform="scale(-1 1)rotate(-36.612 24.198 24.21)"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M11.664 8.235c.366.04 1.29-.05 2.055-.73M15.336 11.86c-.04-.372.051-1.31.74-2.085"
    />
  </Svg>
);
export default IconlystLunarTwoTone;
