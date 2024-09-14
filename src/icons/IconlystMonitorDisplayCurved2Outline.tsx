import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurved2Outline = ({
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
      d="M21.743 3.421a.75.75 0 0 1 .257.565v12.617a.75.75 0 0 1-.852.743 65.3 65.3 0 0 0-17.796 0 .75.75 0 0 1-.852-.743V3.986a.75.75 0 0 1 .852-.743 65.3 65.3 0 0 0 17.796 0 .75.75 0 0 1 .595.178M4 4.841v10.908a66.8 66.8 0 0 1 16.5 0V4.84a66.8 66.8 0 0 1-16.5 0M17.136 20.74c-3.269-.86-6.562-.848-9.892 0a.75.75 0 0 1-.37-1.453c3.566-.909 7.119-.924 10.643.001a.75.75 0 1 1-.381 1.451"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.799 15.285a.75.75 0 0 1 .75.75v3.467a.75.75 0 0 1-1.5 0v-3.467a.75.75 0 0 1 .75-.75M14.713 15.285a.75.75 0 0 1 .75.75v3.477a.75.75 0 0 1-1.5 0v-3.477a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurved2Outline;
