import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurvedOutline = ({
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
      d="M21.743 3.09a.75.75 0 0 1 .257.564v12.617a.75.75 0 0 1-.852.743 65.3 65.3 0 0 0-17.796 0 .75.75 0 0 1-.852-.743V3.654a.75.75 0 0 1 .852-.743 65.3 65.3 0 0 0 17.796 0 .75.75 0 0 1 .595.178M4 4.507v10.909a66.8 66.8 0 0 1 16.5 0V4.509a66.8 66.8 0 0 1-16.5 0M17.136 21.073c-3.269-.859-6.562-.847-9.892.001a.75.75 0 1 1-.37-1.453c3.566-.909 7.119-.924 10.643.001a.75.75 0 1 1-.381 1.451"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurvedOutline;
