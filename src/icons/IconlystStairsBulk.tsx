import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStairsBulk = ({
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
      fill={props.color}
      d="M20.5 19.506c0 .506-.41.916-.917.916h-5.575v-6.426H20.5z"
    />
    <Path
      fill={props.color}
      d="M16.405 3.578a.917.917 0 0 0-.917.917v3.06h-3.096a.917.917 0 0 0-.917.918v3.193H8.38a.917.917 0 0 0-.917.917v2.995H4.417a.917.917 0 0 0-.917.917v3.01c0 .507.41.918.917.918H14V14h6.5V4.495a.917.917 0 0 0-.917-.917z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStairsBulk;
