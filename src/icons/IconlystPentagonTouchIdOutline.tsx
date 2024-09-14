import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonTouchIdOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M15.042 22.709H9.46a2.98 2.98 0 0 1-2.128-.882l-3.95-3.951a3 3 0 0 1-.882-2.127v-5.58a3 3 0 0 1 .881-2.127l3.952-3.951a2.98 2.98 0 0 1 2.127-.882h5.582a2.98 2.98 0 0 1 2.127.883l3.951 3.95a2.99 2.99 0 0 1 .88 2.127v5.58a2.99 2.99 0 0 1-.88 2.127l-3.953 3.951a2.98 2.98 0 0 1-2.125.882m-5.582-18a1.5 1.5 0 0 0-1.065.441L4.442 9.102A1.5 1.5 0 0 0 4 10.169v5.58a1.5 1.5 0 0 0 .443 1.067l3.95 3.951a1.5 1.5 0 0 0 1.067.442h5.582a1.5 1.5 0 0 0 1.064-.442l3.954-3.951a1.5 1.5 0 0 0 .44-1.067v-5.58a1.5 1.5 0 0 0-.44-1.067l-3.953-3.951a1.5 1.5 0 0 0-1.065-.442z"
    />
    <Path
      fill={props.color}
      d="M13.995 18.16a.75.75 0 0 1-.75-.75v-4.223a1.032 1.032 0 1 0-2.065 0v.477a.75.75 0 1 1-1.5 0v-.477a2.533 2.533 0 1 1 5.065 0v4.223a.75.75 0 0 1-.75.75M16.777 17.139a.75.75 0 0 1-.75-.75v-3.361a3.75 3.75 0 0 0-.689-2.175.75.75 0 1 1 1.226-.864c.629.888.965 1.95.963 3.039v3.36a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M8.314 11.543a.75.75 0 0 1-.651-1.12 5.285 5.285 0 0 1 6.622-2.266.75.75 0 1 1-.578 1.385 3.782 3.782 0 0 0-4.74 1.622.75.75 0 0 1-.653.38M7.727 17.142a.75.75 0 0 1-.75-.75v-2.8a.75.75 0 1 1 1.5 0v2.8a.75.75 0 0 1-.75.75M10.43 18.165a.75.75 0 0 1-.75-.75v-1.6a.75.75 0 1 1 1.5 0v1.6a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystPentagonTouchIdOutline;
