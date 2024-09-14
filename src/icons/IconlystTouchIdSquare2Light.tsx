import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSquare2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.782 3.959h8.435C19.165 3.959 21 6.04 21 8.985v7.948c0 2.945-1.835 5.026-4.784 5.026H7.782C4.834 21.959 3 19.878 3 16.933V8.985C3 6.04 4.843 3.959 7.782 3.959"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.764 17.469v-4.272a1.804 1.804 0 1 0-3.606 0v.483M8.018 10.77a4.58 4.58 0 0 1 5.747-1.966M15.744 10.393c.526.745.835 1.655.835 2.637v3.4M10.158 17.469v-1.623M7.422 16.428v-2.836"
    />
  </Svg>
);
export default IconlystTouchIdSquare2Light;
