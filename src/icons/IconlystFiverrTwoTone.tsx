import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFiverrTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.314 12v8.55a.45.45 0 0 1-.45.45h-2.7a.45.45 0 0 1-.45-.45V12h-2.25a.45.45 0 0 1-.45-.45V9.3a.45.45 0 0 1 .45-.45h1.962C7.283 5.258 9.42 3 11.87 3h2.911a.45.45 0 0 1 .45.45V5.7a.45.45 0 0 1-.45.45h-1.849c-1.167 0-1.617.9-1.617 1.556V8.85"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.314 12.002h4.077v8.55c0 .248.201.45.45.45h2.696a.45.45 0 0 0 .45-.45V9.302a.45.45 0 0 0-.45-.45h-7.223"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFiverrTwoTone;
