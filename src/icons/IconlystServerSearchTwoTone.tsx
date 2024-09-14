import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSearchTwoTone = ({
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
      d="M21.5 11.352v-3.57C21.5 4.842 19.418 3 16.473 3H8.526C5.581 3 3.5 4.834 3.5 7.782v8.433C3.5 19.165 5.581 21 8.526 21h3.082"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.863 16.135h.523M7.863 7.864h.523m4.216 0h4.534"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.02 19.523 21.5 21m-3.48-6.57a2.94 2.94 0 1 1 0 5.88 2.94 2.94 0 0 1 0-5.88M12.72 12H3.523"
    />
  </Svg>
);
export default IconlystServerSearchTwoTone;
