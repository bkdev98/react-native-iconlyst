import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpermBroken = ({
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
      d="M20.998 12.443c-.024-.645-.27-1.228-.745-1.62-1.042-.864-2.783-.481-3.89.855s-1.162 3.118-.121 3.981c.974.81 2.564.525 3.672-.611M10.482 4.772c.9-1.382 2.503-1.932 3.58-1.23 1.076.7 1.22 2.39.32 3.77-.901 1.382-2.503 1.933-3.58 1.231-.43-.28-.711-.718-.836-1.23M10.907 8.664s-.83 3.335-3.87 2.514c-.942-.255-2.034-.345-2.912.164-.619.358-.9.963-1.125 1.613"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.668 20.588c1.79.47 3.81.033 4.56-1.815.414-1.021.696-2.26 1.963-2.475.778-.132 1.41.326 2.043.7.791.467 1.788.842 2.7.526.767-.265 1.282-.957 1.564-1.69"
    />
  </Svg>
);
export default IconlystSpermBroken;
