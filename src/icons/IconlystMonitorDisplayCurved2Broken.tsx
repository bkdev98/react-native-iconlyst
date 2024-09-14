import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurved2Broken = ({
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
      d="M9.844 4.549q5.83.236 11.656-.563v12.617a66 66 0 0 0-18 0V3.986q1.706.234 3.411.379M7.309 20.014c3.448-.879 6.87-.892 10.267 0M10.049 19.502v-3.467M14.963 19.512v-3.477"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurved2Broken;
