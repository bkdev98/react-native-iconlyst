import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquare2Broken = ({
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
      d="M14.014 16.51v-4.272a1.804 1.804 0 1 0-3.606 0v.483M8.268 9.811a4.58 4.58 0 0 1 5.747-1.966M15.994 9.434c.526.745.835 1.655.835 2.637v3.4M10.408 16.51v-1.623M7.672 15.469v-2.836"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.249 21H8.032c-2.948 0-4.782-2.081-4.782-5.026V8.026C3.25 5.081 5.093 3 8.032 3h8.435c2.948 0 4.783 2.081 4.783 5.026v7.948c0 2.945-1.835 5.026-4.784 5.026h-.702"
    />
  </Svg>
);
export default IconlystTouchIdSquare2Broken;
