import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdatePhoneOutline = ({
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
      d="M5.124 6.618A4.37 4.37 0 0 1 9.493 2.25h1.014a.75.75 0 0 1 0 1.5H9.493a2.87 2.87 0 0 0-2.869 2.868l.001 10.764a2.87 2.87 0 0 0 2.868 2.868h5.515a2.867 2.867 0 0 0 2.868-2.868v-5.365a.75.75 0 0 1 1.5 0v5.364a4.367 4.367 0 0 1-4.368 4.369H9.493a4.37 4.37 0 0 1-4.368-4.367z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.352 7.401a.75.75 0 0 1 .75-.75h1.8a.75.75 0 0 1 0 1.5h-1.05v.925a.75.75 0 0 1-1.5 0zM18.628 2.25a.75.75 0 0 1 .75.75v1.8a.75.75 0 0 1-.75.75h-1.8a.75.75 0 0 1 0-1.5h1.05V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.702 3.94c-.812 0-1.512.433-1.886 1.089a.75.75 0 0 1-1.303-.744 3.66 3.66 0 0 1 3.189-1.846c1.198 0 2.093.5 2.674.984a4.7 4.7 0 0 1 .823.893l.048.07.014.024.005.008.002.003v.001l.001.001-.642.386.643-.385a.75.75 0 0 1-1.284.776m0 0-.003-.004-.02-.032a3.159 3.159 0 0 0-.546-.588 2.64 2.64 0 0 0-1.715-.637M12.71 6.77a.75.75 0 0 1 1.03.247l.004.005.023.035q.034.051.107.146c.098.126.242.294.426.46.378.342.856.617 1.402.617.803 0 1.505-.433 1.881-1.083a.75.75 0 1 1 1.298.751 3.67 3.67 0 0 1-3.179 1.832c-1.065 0-1.887-.534-2.407-1.003a5 5 0 0 1-.812-.942l-.014-.022-.004-.007-.002-.003-.001-.001.64-.392-.64.391a.75.75 0 0 1 .249-1.03M11.65 17.28a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpdatePhoneOutline;
