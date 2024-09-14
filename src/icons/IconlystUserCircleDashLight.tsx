import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCircleDashLight = ({
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
      d="M3.475 9.547a9 9 0 0 0-.298 3.033M4.928 6.63A9 9 0 0 1 6.38 5.078M7.002 19.36a9 9 0 0 1-3.12-3.782M17.714 19.086a8.96 8.96 0 0 1-4.878 1.888 9 9 0 0 1-2.645-.194M19.797 16.724a8.92 8.92 0 0 0 1.345-5.06 9.01 9.01 0 0 0-9.349-8.657M8.58 16.19c0-1.163.922-2.616 3.566-2.616 2.65 0 3.571 1.44 3.571 2.603"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.429 9.086a2.279 2.279 0 1 1-4.558 0 2.279 2.279 0 0 1 4.558 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserCircleDashLight;
