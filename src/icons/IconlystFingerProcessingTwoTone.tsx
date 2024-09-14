import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFingerProcessingTwoTone = ({
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
      d="M3.5 8.47V6.891A3.89 3.89 0 0 1 7.393 3h1.29M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M21.5 15.531v1.577A3.89 3.89 0 0 1 17.608 21h-1.29M21.5 8.47V6.891A3.89 3.89 0 0 0 17.607 3H16.35"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.264 16.51v-4.272a1.804 1.804 0 1 0-3.606 0v.483M8.518 9.811a4.58 4.58 0 0 1 5.747-1.966M16.244 9.434c.526.745.835 1.655.835 2.637v3.4M10.658 16.51v-1.623M7.922 15.469v-2.836"
    />
  </Svg>
);
export default IconlystFingerProcessingTwoTone;
