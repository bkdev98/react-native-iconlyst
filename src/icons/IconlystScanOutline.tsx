import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.37 17.279a2.986 2.986 0 0 0 2.983 2.982h1.236a.75.75 0 0 1 0 1.5H7.353a4.49 4.49 0 0 1-4.483-4.482l-.001-3.325-1.119.001a.75.75 0 0 1 0-1.5l1.856-.001h17.288l1.856.001a.75.75 0 0 1 0 1.5h-1.12v3.324a4.49 4.49 0 0 1-4.483 4.482h-1.205a.75.75 0 0 1 0-1.5h1.205a2.986 2.986 0 0 0 2.983-2.982v-3.325H4.369zM17.147 3a4.49 4.49 0 0 1 4.483 4.481v1.514a.75.75 0 0 1-1.5 0V7.481a2.986 2.986 0 0 0-2.983-2.98h-1.205a.75.75 0 0 1 0-1.5zM8.589 3a.75.75 0 0 1 0 1.5H7.353A2.986 2.986 0 0 0 4.37 7.481v1.514a.75.75 0 0 1-1.5 0V7.481a4.49 4.49 0 0 1 4.483-4.48z"
    />
  </Svg>
);
export default IconlystScanOutline;
