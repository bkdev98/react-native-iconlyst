import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudConnectTwoTone = ({
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
      d="M7.881 7.62c-2.14.02-3.87 1.458-3.87 3.907 0 1.584.942 2.947 2.298 3.559.57.231 1.138.32 1.57.32h9.237c.432 0 1.001-.085 1.579-.316a3.91 3.91 0 0 0 2.294-3.563c0-2.45-1.729-3.887-3.87-3.907C17.12 6.08 15.913 3 12.5 3 9.09 3 7.881 6.08 7.881 7.62M13.982 19.52a1.482 1.482 0 1 1-2.964 0 1.482 1.482 0 0 1 2.964 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.256 19.52H13.96m-2.927 0H6.746M12.502 18.032v-2.61"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCloudConnectTwoTone;
