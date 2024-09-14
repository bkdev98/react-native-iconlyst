import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonSleepLight = ({
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
      d="M4.098 14.162c-.043-.023-.095.017-.081.065 1.043 3.65 4.407 6.323 8.38 6.323 4.818 0 8.717-3.909 8.717-8.718a8.71 8.71 0 0 0-6.314-8.38c-.048-.013-.087.038-.064.082a7.87 7.87 0 0 1-1.394 9.244 7.86 7.86 0 0 1-9.244 1.384"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.458 5.297h3.027L7.458 9.333h3.027M3.114 3.45h2.08l-2.08 2.772h2.08"
    />
  </Svg>
);
export default IconlystMoonSleepLight;
