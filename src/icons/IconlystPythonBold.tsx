import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPythonBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.62 5.713a.751.751 0 1 1-.01-1.5h.01a.749.749 0 1 1 0 1.5m3.48 6.04c1.19 0 2.15-.96 2.15-2.14v-5.11a2.39 2.39 0 0 0-2.39-2.39h-3.72c-1.32 0-2.4 1.07-2.4 2.39v1.95a.3.3 0 0 0 .3.3H12c.41 0 .75.34.75.75s-.34.75-.75.75H4a2.4 2.4 0 0 0-2.4 2.4v3.71c0 1.32 1.08 2.4 2.4 2.4h1.94a.3.3 0 0 0 .3-.3v-1.06a3.66 3.66 0 0 1 3.66-3.65z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.37 19.293a.751.751 0 0 1 .02 1.5h-.02a.749.749 0 1 1 0-1.5M20 8.253h-1.95a.3.3 0 0 0-.3.3v1.06c0 2.01-1.63 3.64-3.65 3.64H9.9c-1.19 0-2.16.97-2.16 2.15v5.11c0 1.32 1.08 2.39 2.4 2.39h3.72a2.39 2.39 0 0 0 2.39-2.39v-1.95a.3.3 0 0 0-.3-.3H12a.749.749 0 1 1 0-1.5h8c1.32 0 2.4-1.08 2.4-2.4v-3.71a2.4 2.4 0 0 0-2.4-2.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPythonBold;
