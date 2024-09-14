import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWorkOutline = ({
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
      d="M21.273 14.735a.75.75 0 0 1 .69.805l-.19 2.51a4.01 4.01 0 0 1-3.978 3.69h-11.6a4.01 4.01 0 0 1-3.98-3.69l-.19-2.51a.75.75 0 0 1 .693-.805c.415-.015.773.278.805.692l.189 2.508a2.503 2.503 0 0 0 2.483 2.305h11.6a2.5 2.5 0 0 0 2.483-2.305l.19-2.508c.032-.414.399-.708.805-.692M13.285 2a2.965 2.965 0 0 1 2.936 2.58h1.97c2.095 0 3.8 1.709 3.8 3.811v3.439a.75.75 0 0 1-.372.647c-2.468 1.445-5.595 2.289-8.874 2.401v1.799a.75.75 0 0 1-1.5 0v-1.799c-3.277-.111-6.404-.954-8.874-2.401a.75.75 0 0 1-.37-.647V8.381A3.81 3.81 0 0 1 5.81 4.58H7.77A2.965 2.965 0 0 1 10.705 2zm4.905 4.08H5.81A2.31 2.31 0 0 0 3.5 8.381v3.012c2.374 1.29 5.366 1.997 8.481 1.998l.014-.001h.011l.476-.005c2.946-.07 5.756-.769 8.008-1.992V8.391a2.307 2.307 0 0 0-2.3-2.311M13.285 3.5h-2.58c-.673 0-1.242.458-1.41 1.08h5.4a1.46 1.46 0 0 0-1.41-1.08"
    />
  </Svg>
);
export default IconlystWorkOutline;
