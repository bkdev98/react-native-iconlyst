import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBackward15sBulk = ({
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
      d="M13.402 3c-3.934 0-7.33 2.594-8.534 6.159l-.633-.194a.752.752 0 0 0-.935.942l.793 2.509a.752.752 0 0 0 1.181.362l2.06-1.632a.75.75 0 0 0-.246-1.305L6.303 9.6c1.012-2.954 3.832-5.1 7.1-5.1 4.135 0 7.5 3.364 7.5 7.5s-3.365 7.5-7.5 7.5a7.5 7.5 0 0 1-6.176-3.245.749.749 0 1 0-1.234.851A9 9 0 0 0 13.403 21c4.962 0 9-4.037 9-9s-4.038-9-9-9"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.668 14.58V9.36a.75.75 0 0 0-1.5 0v5.22a.75.75 0 0 0 1.5 0M15.436 13.83h-1.854a.75.75 0 0 0 0 1.5h1.853a2.094 2.094 0 0 0 2.094-2.09c0-1.153-.94-2.09-2.094-2.09h-1.104v-1.04h2.192a.75.75 0 0 0 0-1.5h-2.941a.75.75 0 0 0-.75.75v2.54c0 .413.335.75.75.75h1.853c.327 0 .594.264.594.59a.593.593 0 0 1-.594.59"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBackward15sBulk;
