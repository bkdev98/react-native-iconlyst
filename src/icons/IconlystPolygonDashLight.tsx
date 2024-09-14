import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygonDashLight = ({
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
      d="M14.159 21h-4.32M19.891 16.836l-3.055 3.055M7.163 19.891l-3.056-3.055M3 14.16V9.84M4.107 7.163l3.056-3.056M9.84 3h4.32M16.836 4.108l3.055 3.056M21 9.84v4.32"
    />
  </Svg>
);
export default IconlystPolygonDashLight;
