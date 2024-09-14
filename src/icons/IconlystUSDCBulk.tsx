import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUSDCBulk = ({
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
      d="M12.5 2.505c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.999 18.562a.8.8 0 0 0 .186-.023c2.941-.75 5.077-3.5 5.077-6.536s-2.136-5.785-5.077-6.537a.75.75 0 0 0-.371 1.453c2.288.585 3.948 2.723 3.948 5.084s-1.66 4.5-3.947 5.083a.75.75 0 0 0 .184 1.476"
    />
    <Path
      fill={props.color}
      d="M12.5 17.253a.75.75 0 0 0 .75-.75v-.75c1.24 0 2.25-1.01 2.25-2.25s-1.01-2.25-2.25-2.25h-1.5a.75.75 0 0 1-.75-.75c0-.413.336-.75.75-.75h1.5c.293 0 .752.316.97.531a.75.75 0 0 0 1.06-1.06c-.1-.1-.998-.97-2.03-.97v-.75a.75.75 0 1 0-1.5 0v.75c-1.24 0-2.25 1.01-2.25 2.25s1.01 2.25 2.25 2.25h1.5a.75.75 0 0 1 0 1.5h-1.5c-.293 0-.754-.319-.97-.53a.75.75 0 0 0-1.06 1.06c.1.1.999.97 2.03.97v.75c0 .413.335.75.75.75"
    />
    <Path
      fill={props.color}
      d="M11 18.562a.75.75 0 0 0 .185-1.476C8.9 16.502 7.24 14.364 7.24 12.003c0-2.36 1.66-4.499 3.946-5.084a.75.75 0 0 0-.37-1.453c-2.941.752-5.076 3.501-5.076 6.537s2.135 5.785 5.076 6.536a.8.8 0 0 0 .186.023"
    />
  </Svg>
);
export default IconlystUSDCBulk;
