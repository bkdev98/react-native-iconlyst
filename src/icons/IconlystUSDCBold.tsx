import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUSDCBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.686 18.54a.75.75 0 1 1-.371-1.453c2.286-.583 3.947-2.721 3.947-5.082s-1.66-4.5-3.947-5.084a.75.75 0 0 1 .37-1.453c2.941.752 5.077 3.5 5.077 6.537s-2.136 5.785-5.077 6.536m-.937-2.035a.75.75 0 1 1-1.5 0v-.75c-1.03 0-1.93-.87-2.03-.97a.749.749 0 1 1 1.062-1.06c.215.212.675.53.968.53h1.5a.75.75 0 0 0 0-1.5h-1.5c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25v-.75a.75.75 0 0 1 1.5 0v.75c1.032 0 1.931.87 2.031.97a.749.749 0 1 1-1.06 1.06c-.219-.214-.678-.53-.97-.53h-1.5a.75.75 0 0 0-.75.75c0 .413.336.75.75.75h1.5c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25zM11.227 18a.75.75 0 0 1-.912.54c-2.94-.75-5.075-3.5-5.075-6.535s2.135-5.785 5.076-6.537a.75.75 0 1 1 .371 1.453c-2.287.585-3.947 2.723-3.947 5.084s1.66 4.499 3.946 5.083a.75.75 0 0 1 .541.912M12 2.505c-5.237 0-9.5 4.262-9.5 9.5s4.263 9.5 9.5 9.5c5.24 0 9.5-4.262 9.5-9.5s-4.26-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUSDCBold;
