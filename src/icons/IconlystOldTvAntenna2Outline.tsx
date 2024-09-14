import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntenna2Outline = ({
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
      d="M2.5 11.308A4.78 4.78 0 0 1 7.28 6.53h9.942A4.78 4.78 0 0 1 22 11.31v5.456c0 2.64-2.14 4.779-4.778 4.779H7.279a4.78 4.78 0 0 1-4.779-4.78zM7.28 8.03A3.28 3.28 0 0 0 4 11.31v5.456a3.28 3.28 0 0 0 3.28 3.279h9.942a3.28 3.28 0 0 0 3.278-3.28v-5.456a3.28 3.28 0 0 0-3.278-3.279z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.234 16.176a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M18.234 10.397a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M18.234 13.287a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M5.518 12.079A2.734 2.734 0 0 1 8.25 9.344h5.268a2.734 2.734 0 0 1 2.734 2.735v3.917a2.734 2.734 0 0 1-2.734 2.734H8.251a2.734 2.734 0 0 1-2.733-2.734zm2.733-1.235c-.68 0-1.233.552-1.233 1.235v3.917c0 .681.552 1.234 1.233 1.234h5.268c.681 0 1.234-.553 1.234-1.234v-3.917c0-.683-.553-1.235-1.234-1.235zM17.305 2.705a.75.75 0 0 1-.059 1.059l-4.552 4.075a.75.75 0 0 1-1.008-.007L7.25 3.758a.75.75 0 1 1 1.014-1.105L12.2 6.268l4.046-3.622a.75.75 0 0 1 1.059.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAntenna2Outline;
