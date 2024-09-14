import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRollingBrushBroken = ({
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
      d="M12.947 16.264a1.894 1.894 0 1 0-3.789 0v2.842a1.894 1.894 0 1 0 3.789 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.684 5.842a2.843 2.843 0 0 1 0 5.685h-3.79a2.84 2.84 0 0 0-2.841 2.841"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.58 3h4.262a2.842 2.842 0 0 1 0 5.684H6.317a2.842 2.842 0 0 1 0-5.684h1.096"
    />
  </Svg>
);
export default IconlystRollingBrushBroken;
