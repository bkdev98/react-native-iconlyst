import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentCheckOutline = ({
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
      d="M11.35 15.474a.75.75 0 0 1-.53-.22l-1.728-1.729a.75.75 0 0 1 1.06-1.06l1.2 1.2 3.007-3.005a.75.75 0 0 1 1.06 1.06l-3.537 3.537a.75.75 0 0 1-.532.216"
    />
    <Path
      fill={props.color}
      d="M16.25 21.75H8.294a4.51 4.51 0 0 1-4.42-4.6V6.657A4.523 4.523 0 0 1 8.368 2.25h5.668a2.8 2.8 0 0 1 2.02.861l3.79 3.949c.502.52.782 1.217.78 1.94v8.163a4.543 4.543 0 0 1-4.376 4.587m-7.88-18a3.01 3.01 0 0 0-3 2.925v10.488a3.01 3.01 0 0 0 2.938 3.086h7.909a3.043 3.043 0 0 0 2.906-3.082V9a1.3 1.3 0 0 0-.362-.9L14.97 4.15a1.3 1.3 0 0 0-.937-.4H8.368z"
    />
    <Path
      fill={props.color}
      d="M19.812 9.266h-2.739a3.315 3.315 0 0 1-3.3-3.311V3.063a.75.75 0 0 1 1.5 0v2.892a1.81 1.81 0 0 0 1.8 1.81h2.737a.75.75 0 1 1 0 1.5z"
    />
  </Svg>
);
export default IconlystDcoumentCheckOutline;
