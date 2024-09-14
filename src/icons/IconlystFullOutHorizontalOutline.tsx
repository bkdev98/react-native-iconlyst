import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullOutHorizontalOutline = ({
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
      d="M6.461 2.975h11.082c1.56 0 2.882.556 3.81 1.553.923.991 1.401 2.357 1.401 3.886v7.12c0 1.528-.478 2.894-1.4 3.885-.93.997-2.252 1.553-3.812 1.553H6.46c-1.56 0-2.883-.556-3.81-1.553-.923-.991-1.401-2.357-1.401-3.886v-7.12c0-1.529.48-2.895 1.404-3.885.928-.997 2.25-1.553 3.807-1.553m11.082 1.5H6.46c-1.185 0-2.094.415-2.71 1.076-.622.666-1.001 1.645-1.001 2.863v7.12c0 1.218.378 2.197.998 2.863.615.66 1.523 1.075 2.713 1.075h11.08c1.19 0 2.1-.415 2.715-1.075.62-.667.998-1.645.998-2.864v-7.12c0-1.218-.378-2.196-.998-2.863-.615-.66-1.524-1.075-2.713-1.075"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.25 8A.75.75 0 0 1 6 7.25h4a.75.75 0 0 1 0 1.5H7.81l2.72 2.72a.75.75 0 1 1-1.06 1.06L6.75 9.81V12a.75.75 0 0 1-1.5 0zM18.75 16a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1 0-1.5h2.19l-2.72-2.72a.75.75 0 1 1 1.06-1.06l2.72 2.72V12a.75.75 0 0 1 1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFullOutHorizontalOutline;
