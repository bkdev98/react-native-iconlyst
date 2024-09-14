import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockOffSleepOutline = ({
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
      d="M12.308 3.75a8.25 8.25 0 1 0 8.143 9.58.75.75 0 1 1 1.481.24c-.75 4.638-4.773 8.18-9.624 8.18-5.384 0-9.75-4.365-9.75-9.75s4.366-9.75 9.75-9.75a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.98 7.826a.75.75 0 0 1 .75.75v3.673l2.81 1.679a.75.75 0 1 1-.77 1.287l-3.174-1.897a.75.75 0 0 1-.366-.644V8.576a.75.75 0 0 1 .75-.75M16.18 4.621a.75.75 0 0 1 .75-.75h3.49a.75.75 0 0 1 .555 1.254L18.622 7.72h1.798a.75.75 0 0 1 0 1.5h-3.49a.75.75 0 0 1-.556-1.254l2.353-2.595H16.93a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClockOffSleepOutline;
