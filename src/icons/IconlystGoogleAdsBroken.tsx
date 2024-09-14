import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleAdsBroken = ({
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
      d="M4.137 16.018a2.887 2.887 0 1 0 5.001 2.888l3.53-6.113M10.242 5.443l-3.053 5.288M18.31 10.731l-3.053-5.287a2.887 2.887 0 0 0-5 2.887l6.105 10.575a2.887 2.887 0 0 0 5-2.888l-.763-1.322"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4.137 16.018a2.887 2.887 0 1 0 2.418-1.443"
    />
  </Svg>
);
export default IconlystGoogleAdsBroken;
