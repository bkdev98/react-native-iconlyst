import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNumber6SquareLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.283 3.383h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.946-1.834 5.027-4.783 5.027H8.283c-2.948 0-4.783-2.081-4.783-5.027V8.41c0-2.946 1.844-5.026 4.783-5.026"
    />
    <Circle
      cx={12.504}
      cy={13.976}
      r={2.406}
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
      d="M12.918 8.383s-3.09 2.227-2.81 5.808"
    />
  </Svg>
);
export default IconlystNumber6SquareLight;
