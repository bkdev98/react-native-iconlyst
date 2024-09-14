import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoconutLight = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.333 7.397c1.217 1.07 2.055 2.99 2.055 5.122C20.388 17.385 16.633 21 12 21s-8.388-3.615-8.388-8.48c0-1.873.885-3.967 2.161-5.123"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.539 10.085-1.665-5.58a.98.98 0 0 0-.691-.646L6.746 3"
    />
    <Ellipse
      cx={12.038}
      cy={8.005}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={6.471}
      ry={2.506}
    />
  </Svg>
);
export default IconlystCoconutLight;
