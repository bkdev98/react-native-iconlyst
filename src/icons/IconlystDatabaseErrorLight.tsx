import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseErrorLight = ({
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
      strokeWidth={1.5}
      d="M11.748 8.828c4.15 0 7.515-1.357 7.515-3.032 0-1.674-3.365-3.031-7.515-3.031-4.151 0-7.516 1.357-7.516 3.031s3.365 3.032 7.516 3.032Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.877 14.778v2.994M16.886 20.7l.001.063M4.232 11.701v5.958s0 2.98 7.526 2.98M19.264 11.7V5.744"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.232 5.743v5.958s0 2.979 7.526 2.979"
    />
  </Svg>
);
export default IconlystDatabaseErrorLight;
