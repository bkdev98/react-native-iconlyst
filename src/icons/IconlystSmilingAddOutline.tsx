import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingAddOutline = ({
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
      d="M12.138 21.75a9.75 9.75 0 1 1 0-19.5.75.75 0 1 1 0 1.5 8.25 8.25 0 1 0 8.25 8.25.75.75 0 1 1 1.5 0 9.76 9.76 0 0 1-9.75 9.75"
    />
    <Path
      fill={props.color}
      d="M9.163 11a.976.976 0 0 1 0-1.95.975.975 0 1 1 0 1.95M15.664 11a.976.976 0 0 1-.002-1.95.975.975 0 0 1 0 1.95zM12.137 16.521a4.39 4.39 0 0 1-3.475-1.775.75.75 0 0 1 1.19-.914 2.79 2.79 0 0 0 4.57 0 .75.75 0 1 1 1.19.914 4.39 4.39 0 0 1-3.475 1.775M19.228 8.35a.75.75 0 0 1-.75-.75V6.21h-1.385a.75.75 0 0 1 0-1.5h1.385V3.324a.75.75 0 1 1 1.5 0V4.71h1.384a.75.75 0 1 1 0 1.5h-1.384V7.6a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystSmilingAddOutline;
