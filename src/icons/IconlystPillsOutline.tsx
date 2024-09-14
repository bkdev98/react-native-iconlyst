import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPillsOutline = ({
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
      fill={props.color}
      d="M8.05 21.751a5.55 5.55 0 0 1-3.924-9.476l8.4-8.4a5.55 5.55 0 1 1 7.848 7.85l-8.4 8.4a5.51 5.51 0 0 1-3.924 1.626m8.4-18a4.02 4.02 0 0 0-2.863 1.187l-8.4 8.4a4.05 4.05 0 1 0 5.728 5.728l8.4-8.4a4.051 4.051 0 0 0-2.863-6.915z"
    />
    <Path
      fill={props.color}
      d="M15.723 10.99a.75.75 0 0 1-.517-1.295l1.7-1.61a.75.75 0 1 1 1.034 1.088l-1.7 1.61a.75.75 0 0 1-.517.206M15.645 16.148a.75.75 0 0 1-.53-.22l-6.79-6.79a.75.75 0 0 1 1.06-1.06l6.79 6.789a.75.75 0 0 1-.53 1.28"
    />
  </Svg>
);
export default IconlystPillsOutline;
