import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoolerBulk = ({
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
      d="M22.182 6.596c-.16-.71-.644-2.873-3.653-3.262-.394-.113-4.957-.139-5.632-.139-1.267 0-5.01.023-5.546.124-3.067.402-3.552 2.488-3.742 3.318a22 22 0 0 0 .006 6.08c.3 1.445 1.063 2.404 2.3 2.916a.286.286 0 0 0 .374-.166l.634-1.608a2.46 2.46 0 0 1 2.299-1.56h7.529c1.023 0 1.925.612 2.299 1.56l.61 1.547c.06.152.233.23.382.161 1.169-.532 1.878-1.475 2.142-2.859q.001-.01.004-.022c.283-1.959.283-3.993-.006-6.09"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.366 7.766h1.818a.75.75 0 0 0 0-1.5h-1.818a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.925 17.046a.75.75 0 0 0-.75.75v2.26a.75.75 0 0 0 1.5 0v-2.26a.75.75 0 0 0-.75-.75M17.825 19.306a1.51 1.51 0 0 1-1.508-1.51.75.75 0 0 0-1.5 0c0 1.66 1.35 3.01 3.008 3.01a.75.75 0 0 0 0-1.5M10.148 17.046a.75.75 0 0 0-.75.75c0 .832-.677 1.51-1.509 1.51a.75.75 0 0 0 0 1.5 3.013 3.013 0 0 0 3.01-3.01.75.75 0 0 0-.75-.75M17.895 16.057c.2-.01.325-.211.252-.397l-.493-1.25a.96.96 0 0 0-.903-.61h-7.53a.96.96 0 0 0-.903.61l-.493 1.253a.293.293 0 0 0 .257.403c1.105.052 3.003.06 4.814.06.17 0 3.57 0 5-.069"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoolerBulk;
