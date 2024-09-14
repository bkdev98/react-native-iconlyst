import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDFormatBold = ({
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
      d="M15.333 10.05h-.149v3.9h.149a1.951 1.951 0 0 0 0-3.9"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.333 15.45h-.899a.75.75 0 0 1-.75-.75V9.3a.75.75 0 0 1 .75-.75h.899c1.9 0 3.447 1.547 3.447 3.45a3.453 3.453 0 0 1-3.447 3.45m-2.846-3.411V14.7a.75.75 0 0 1-1.5 0v-1.95H8.891v1.95a.75.75 0 0 1-1.5 0V9.3a.75.75 0 0 1 1.5 0v1.95h2.096V9.3a.75.75 0 0 1 1.5 0v2.661l.001.039zM17.051 2.5H8.616c-3.159 0-5.282 2.222-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDFormatBold;
