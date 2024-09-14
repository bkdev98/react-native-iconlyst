import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart4LineBulk = ({
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
      fillRule="evenodd"
      d="M9.405 22a1 1 0 0 1-1-1v-8.43a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1m11.033 0a1 1 0 0 1-1-1v-4.74a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M2.563 21a1 1 0 1 0 2 0V3a1 1 0 1 0-2 0zM14.327 21a1 1 0 1 0 2 0V8.6a1 1 0 1 0-2 0z"
    />
  </Svg>
);
export default IconlystChart4LineBulk;
