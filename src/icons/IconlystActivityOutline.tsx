import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityOutline = ({
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
      d="M14.897 2.842a.75.75 0 0 1 0 1.5H7.629c-2.508 0-4.13 1.724-4.13 4.394v8.082c0 2.705 1.583 4.385 4.13 4.385h8.604c2.508 0 4.129-1.72 4.129-4.385V9.78a.75.75 0 0 1 1.5 0v7.04c0 3.52-2.262 5.884-5.63 5.884H7.63c-3.367 0-5.63-2.365-5.63-5.885V8.736c0-3.525 2.263-5.894 5.63-5.894zm2.115 6.83a.75.75 0 0 1 .134 1.052l-2.93 3.78a.75.75 0 0 1-.5.285.74.74 0 0 1-.556-.154l-2.818-2.214-2.53 3.289a.75.75 0 1 1-1.19-.914l2.993-3.89a.75.75 0 0 1 1.058-.132l2.82 2.215 2.467-3.183a.746.746 0 0 1 1.052-.134M19.967 2a2.674 2.674 0 0 1 2.672 2.672 2.675 2.675 0 0 1-2.672 2.673 2.676 2.676 0 0 1-2.672-2.673A2.675 2.675 0 0 1 19.967 2m0 1.5a1.173 1.173 0 0 0 0 2.345 1.173 1.173 0 0 0 0-2.345"
    />
  </Svg>
);
export default IconlystActivityOutline;
