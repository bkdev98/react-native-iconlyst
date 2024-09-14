import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOldTvAntennaErrorOutline = ({
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
      d="M12.25 16.168a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-1.5 0v-.01a.75.75 0 0 1 .75-.75M12.25 10.352a.75.75 0 0 1 .75.75v3.212a.75.75 0 0 1-1.5 0v-3.212a.75.75 0 0 1 .75-.75M17.305 2.705a.75.75 0 0 1-.059 1.059l-4.552 4.075a.75.75 0 0 1-1.008-.007L7.25 3.758a.75.75 0 1 1 1.014-1.105L12.2 6.268l4.046-3.622a.75.75 0 0 1 1.059.059"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOldTvAntennaErrorOutline;
