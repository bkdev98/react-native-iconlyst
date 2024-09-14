import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart4LineBold = ({
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
      d="M4.063 22a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v18a1 1 0 0 1-1 1m5.842 0a1 1 0 0 1-1-1v-8.43a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1m5.922 0a1 1 0 0 1-1-1V8.6a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1m5.11 0a1 1 0 0 1-1-1v-4.74a1 1 0 1 1 2 0V21a1 1 0 0 1-1 1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChart4LineBold;
