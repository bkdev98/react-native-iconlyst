import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWindsockTwoTone = ({
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
      d="M10.498 8.153c-.618 2.308-1.852 3.982-2.756 3.74s-1.135-2.31-.517-4.617 1.852-3.982 2.756-3.74c.904.243 1.135 2.31.517 4.617"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.12 3.59 10.597 5.256c.349.106.385 1.235.08 2.522-.304 1.287-.834 2.244-1.183 2.138L7.835 11.913M3.105 3v18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.141 3.737 3.105 8l4.54 3.853M8.313 16.337l4.368.47M12.465 19.682l2.91.313"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystWindsockTwoTone;
