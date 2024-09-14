import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareTouchIdCloseLight = ({
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
      d="M21 14.987V8.985c0-2.945-1.835-5.026-4.783-5.026H7.782C4.843 3.959 3 6.04 3 8.985v7.948c0 2.945 1.834 5.026 4.782 5.026h4.542"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.018 10.77a4.58 4.58 0 0 1 5.747-1.966M7.422 16.428v-2.836M15.744 10.393c.526.745.835 1.655.835 2.637v1.705M13.764 17.469v-4.272a1.804 1.804 0 1 0-3.606 0v.483M10.158 17.469v-1.623M19.187 20.143l-1.814 1.813m1.814-1.813 1.812 1.813zm0 0-1.814-1.813zm0 0 1.812-1.813z"
    />
  </Svg>
);
export default IconlystSquareTouchIdCloseLight;
