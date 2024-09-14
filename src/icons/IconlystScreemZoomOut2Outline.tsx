import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScreemZoomOut2Outline = ({
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
      d="M2.334 15.414a.75.75 0 0 1 .75-.75h2.51A3.825 3.825 0 0 1 9.42 18.49V21a.75.75 0 0 1-1.5 0v-2.511a2.325 2.325 0 0 0-2.326-2.325h-2.51a.75.75 0 0 1-.75-.75M18.574 16.164a2.325 2.325 0 0 0-2.326 2.325V21a.75.75 0 1 1-1.5 0v-2.511a3.825 3.825 0 0 1 3.826-3.825h2.51a.75.75 0 1 1 0 1.5zM8.67 2.25a.75.75 0 0 1 .75.75v2.511a3.825 3.825 0 0 1-3.826 3.826h-2.51a.75.75 0 1 1 0-1.5h2.51A2.325 2.325 0 0 0 7.92 5.51V3a.75.75 0 0 1 .75-.75M15.498 2.25a.75.75 0 0 1 .75.75v2.511a2.325 2.325 0 0 0 2.326 2.326h2.51a.75.75 0 1 1 0 1.5h-2.51a3.825 3.825 0 0 1-3.826-3.826V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScreemZoomOut2Outline;
