import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilm2Outline = ({
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
      d="M4.179 3.657C5.174 2.73 6.545 2.25 8.08 2.25h8.338c1.535 0 2.907.48 3.902 1.407 1.001.933 1.56 2.26 1.56 3.828v9.032c0 1.567-.56 2.895-1.56 3.827-.995.926-2.367 1.406-3.902 1.406H8.08c-1.536 0-2.908-.483-3.903-1.41-1-.933-1.559-2.26-1.559-3.823V7.484c0-1.567.558-2.895 1.56-3.827M5.2 4.755c-.665.619-1.082 1.533-1.082 2.729v9.033c0 1.192.417 2.106 1.082 2.726.671.626 1.655 1.007 2.88 1.007h8.338c1.225 0 2.21-.38 2.88-1.004.664-.619 1.081-1.533 1.081-2.729V7.485c0-1.197-.417-2.111-1.081-2.73-.671-.625-1.655-1.005-2.88-1.005H8.08c-1.226 0-2.21.38-2.88 1.005"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.16 2.367a.75.75 0 0 1 .75.75v17.765a.75.75 0 0 1-1.5 0V3.117a.75.75 0 0 1 .75-.75M17.34 2.367a.75.75 0 0 1 .75.75v17.766a.75.75 0 1 1-1.5 0V3.117a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.645 7.527a.75.75 0 0 1 .75-.75h3.762a.75.75 0 0 1 0 1.5H3.395a.75.75 0 0 1-.75-.75m0 8.905a.75.75 0 0 1 .75-.75h3.762a.75.75 0 0 1 0 1.5H3.395a.75.75 0 0 1-.75-.75M16.594 7.527a.75.75 0 0 1 .75-.75h3.787a.75.75 0 1 1 0 1.5h-3.787a.75.75 0 0 1-.75-.75m0 8.905a.75.75 0 0 1 .75-.75h3.787a.75.75 0 1 1 0 1.5h-3.787a.75.75 0 0 1-.75-.75M2.645 11.977a.75.75 0 0 1 .75-.75H21.13a.75.75 0 1 1 0 1.5H3.395a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilm2Outline;
