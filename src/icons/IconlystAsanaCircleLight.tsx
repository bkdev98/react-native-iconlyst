import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAsanaCircleLight = ({
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
      d="M8.608 12.39a1.75 1.75 0 1 0 .002 3.5 1.75 1.75 0 0 0-.002-3.5M15.389 12.387a1.75 1.75 0 1 0 .002 3.5 1.75 1.75 0 0 0-.002-3.5M11.999 6.75a1.75 1.75 0 1 0 .002 3.5 1.75 1.75 0 0 0-.002-3.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAsanaCircleLight;
