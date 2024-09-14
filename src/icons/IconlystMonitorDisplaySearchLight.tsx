import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplaySearchLight = ({
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
      d="M12.404 3.965h4.454A3.937 3.937 0 0 1 20.796 7.9v5.333a3.937 3.937 0 0 1-3.937 3.937H7.143a3.937 3.937 0 0 1-3.938-3.937V11.41M16.832 21H7.17M9.933 17.172 9.311 21M14.068 17.172 14.691 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.027 7.591 9.36 8.922M6.223 3a2.65 2.65 0 1 1 0 5.3 2.65 2.65 0 0 1 0-5.3"
    />
  </Svg>
);
export default IconlystMonitorDisplaySearchLight;
