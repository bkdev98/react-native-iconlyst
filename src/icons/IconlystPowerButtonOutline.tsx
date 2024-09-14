import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerButtonOutline = ({
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
      fillRule="evenodd"
      d="M16.57 5.683a.75.75 0 0 1 1.054-.109 8.53 8.53 0 0 1 3.165 6.637 8.537 8.537 0 0 1-8.539 8.538A8.537 8.537 0 0 1 6.876 5.575a.75.75 0 1 1 .947 1.163 7.037 7.037 0 0 0 4.427 12.51 7.037 7.037 0 0 0 7.039-7.038 7.03 7.03 0 0 0-2.611-5.472.75.75 0 0 1-.109-1.055"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.25A.75.75 0 0 1 13 4v6.787a.75.75 0 0 1-1.5 0V4a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPowerButtonOutline;
