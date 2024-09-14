import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGenerateAiLongDashLight = ({
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
      d="M5.062 6.727A8.8 8.8 0 0 1 6.489 5.2M17.624 18.962a8.8 8.8 0 0 1-4.793 1.856 8.9 8.9 0 0 1-2.599-.19M7.1 19.236a8.87 8.87 0 0 1-3.066-3.717M3.637 9.59a8.8 8.8 0 0 0-.293 2.981M19.672 16.641a8.77 8.77 0 0 0 1.322-4.973 8.85 8.85 0 0 0-9.186-8.505M10.054 13.979l-.1-.274A3.76 3.76 0 0 0 7.73 11.48l-.273-.101.273-.101a3.76 3.76 0 0 0 2.222-2.225l.101-.273.101.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.222 2.225zM15.365 15.22a1.77 1.77 0 0 0-1.177-1.178 1.77 1.77 0 0 0 1.177-1.178 1.77 1.77 0 0 0 1.176 1.178 1.77 1.77 0 0 0-1.176 1.179"
    />
  </Svg>
);
export default IconlystGenerateAiLongDashLight;
