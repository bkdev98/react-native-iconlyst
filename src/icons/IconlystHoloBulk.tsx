import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHoloBulk = ({
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
      d="M16.717 2.5H8.282C5.123 2.5 3 4.722 3 8.03v7.94c0 3.307 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.223 5.284-5.53V8.03c0-3.308-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M15.622 12a.75.75 0 0 0-.75-.75h-.424a2.225 2.225 0 0 1 2.09-1.48.75.75 0 0 0 0-1.5 3.736 3.736 0 0 0-3.654 2.98h-.767a3.736 3.736 0 0 0-3.654-2.98.75.75 0 1 0 0 1.5c.965 0 1.78.62 2.09 1.48h-.426a.75.75 0 0 0 0 1.5h.426a2.22 2.22 0 0 1-2.09 1.479.75.75 0 0 0 0 1.5c1.8 0 3.305-1.281 3.654-2.98h.767a3.736 3.736 0 0 0 3.654 2.98.75.75 0 1 0 0-1.5 2.22 2.22 0 0 1-2.09-1.48h.424a.75.75 0 0 0 .75-.75"
    />
  </Svg>
);
export default IconlystHoloBulk;
