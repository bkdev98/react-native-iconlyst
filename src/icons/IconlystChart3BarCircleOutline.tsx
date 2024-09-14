import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChart3BarCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.202 7.313a.75.75 0 0 1 .75.75v8.114a.75.75 0 0 1-1.5 0V8.063a.75.75 0 0 1 .75-.75m-3.672 3.2a.75.75 0 0 1 .75.75v4.914a.75.75 0 0 1-1.5 0v-4.914a.75.75 0 0 1 .75-.75m-3.733 2.4a.75.75 0 0 1 .75.75v2.513a.75.75 0 0 1-1.5 0v-2.514a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 12.118c0-5.384 4.365-9.75 9.75-9.75s9.75 4.366 9.75 9.75a9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChart3BarCircleOutline;
