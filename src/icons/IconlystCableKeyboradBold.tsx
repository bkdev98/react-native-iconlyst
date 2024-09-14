import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCableKeyboradBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.12 11.72a.867.867 0 0 1 0-1.732.866.866 0 0 1 0 1.732m-1.709 2.88a.867.867 0 0 1 0-1.733.867.867 0 0 1 0 1.733m-.588 3.559H9.178a.75.75 0 0 1 0-1.5h5.645a.75.75 0 0 1 0 1.5m-7.11-4.426a.867.867 0 1 1 1.734.002.867.867 0 0 1-1.734-.002M6.87 11.72a.867.867 0 0 1 0-1.732.866.866 0 0 1 0 1.732m3.418-1.732a.866.866 0 1 1 0 1.732.866.866 0 0 1 0-1.732m1.707 2.879a.867.867 0 1 1-.002 1.734.867.867 0 0 1 .002-1.734m1.707-2.88a.866.866 0 1 1 0 1.733.866.866 0 0 1 0-1.732m2.527-3.577h-3.335v-.14a2.697 2.697 0 0 0-2.684-2.652H9.202a.5.5 0 0 1-.501-.495.75.75 0 0 0-1.5.014 2 2 0 0 0 1.993 1.98h1.001c.607-.015 1.19.523 1.199 1.165v.128H7.771c-3.3 0-5.271 1.934-5.271 5.173v4.873c-.005 1.563.464 2.863 1.356 3.758.918.92 2.268 1.407 3.906 1.407h8.467c3.3 0 5.271-1.93 5.271-5.163v-4.8c0-3.286-1.971-5.248-5.271-5.248"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCableKeyboradBold;
