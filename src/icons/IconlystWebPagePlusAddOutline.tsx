import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPagePlusAddOutline = ({
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
      d="M4.075 3.89c.98-1.052 2.376-1.64 4.024-1.64h8.39c1.652 0 3.049.588 4.028 1.64.974 1.047 1.48 2.49 1.48 4.11v5.002a.75.75 0 1 1-1.5 0v-2.794H4.092v5.697c0 1.31.406 2.367 1.077 3.088.666.715 1.649 1.162 2.93 1.162h1.74a.75.75 0 1 1 0 1.5H8.1c-1.652 0-3.048-.588-4.027-1.64-.974-1.046-1.48-2.49-1.48-4.11V8.001c0-1.621.508-3.065 1.483-4.11m.017 4.818h16.405V8c0-1.31-.406-2.367-1.078-3.089-.666-.715-1.648-1.162-2.93-1.162H8.1c-1.276 0-2.26.447-2.927 1.163C4.5 5.635 4.092 6.69 4.092 8zm1.77-2.176a.75.75 0 0 1 .75-.75h.056a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.473 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.473 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m6.386 7.953a.75.75 0 0 1 .75.75v2.132h2.13a.75.75 0 0 1 0 1.5h-2.13V21a.75.75 0 0 1-1.5 0v-2.133h-2.135a.75.75 0 0 1 0-1.5h2.135v-2.132a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPagePlusAddOutline;
