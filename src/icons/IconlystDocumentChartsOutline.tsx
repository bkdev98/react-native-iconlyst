import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentChartsOutline = ({
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
      fillRule="evenodd"
      d="M8.463 3.87a3.37 3.37 0 0 0-3.37 3.369v9.76a3.37 3.37 0 0 0 3.37 3.37h8.074a3.37 3.37 0 0 0 3.37-3.37V7.24a3.37 3.37 0 0 0-3.37-3.37zm-4.87 3.369a4.87 4.87 0 0 1 4.87-4.87h8.074a4.87 4.87 0 0 1 4.87 4.87v9.76a4.87 4.87 0 0 1-4.87 4.87H8.463A4.87 4.87 0 0 1 3.593 17z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.487 12.043a.75.75 0 0 1 .75.75v4.426a.75.75 0 0 1-1.5 0v-4.427a.75.75 0 0 1 .75-.75M11.138 12.295a.75.75 0 0 1 .75.75v4.173a.75.75 0 0 1-1.5 0v-4.173a.75.75 0 0 1 .75-.75M13.812 14.627a.75.75 0 0 1 .75.75v1.841a.75.75 0 0 1-1.5 0v-1.84a.75.75 0 0 1 .75-.75M8.385 14.627a.75.75 0 0 1 .75.75v1.841a.75.75 0 0 1-1.5 0v-1.84a.75.75 0 0 1 .75-.75M17 6.472a.75.75 0 0 1 .034 1.06l-2.61 2.787a.75.75 0 0 1-.955.117l-2.515-1.633-2.238 2.406a.75.75 0 0 1-1.098-1.022l2.667-2.867a.75.75 0 0 1 .958-.118l2.516 1.634 2.18-2.33A.75.75 0 0 1 17 6.473"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentChartsOutline;
