import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartBulksharp = ({
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
      d="M12.251 20.908V4.954c1.433-1.696 3.344-2.26 5.44-1.583 2.646.852 4.297 3.243 4.31 6.239.024 5.134-4.915 9.156-9.547 11.208z"
    />
    <Path
      fill={props.color}
      d="M12.25 20.908V4.954c-1.434-1.696-3.345-2.26-5.441-1.583C4.163 4.223 2.512 6.614 2.5 9.61c-.025 5.134 4.914 9.156 9.546 11.208z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartBulksharp;
