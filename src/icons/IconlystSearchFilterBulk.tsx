import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFilterBulk = ({
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
      d="M11.135 2.5a8.42 8.42 0 0 0 0 16.84c4.64 0 8.41-3.77 8.41-8.42s-3.77-8.42-8.41-8.42"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.992 19.795-1.983-1.98a1 1 0 0 0-1.413 1.417l1.984 1.979a1 1 0 1 0 1.412-1.416M14.744 11.308c.46-.43.73-1.03.73-1.65v-.54c0-.99-.8-1.79-1.8-1.79h-4.76c-.99 0-1.79.8-1.79 1.79v.8c0 .58.23 1.16.68 1.61l1.63 1.44v1.2a1.348 1.348 0 0 0 1.35 1.35c.17 0 .34-.03.5-.1l.73-.29c.52-.21.86-.7.86-1.26l-.03-.69zm-.77-1.65v-.54c0-.16-.13-.29-.3-.29h-4.76a.29.29 0 0 0-.29.29v.8c0 .19.08.38.21.52l1.67 1.48c.29.31.43.64.43.99v1.04l.44-.18v-.67c0-.38.15-.73.43-.99l1.91-1.89c.18-.16.26-.36.26-.56"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchFilterBulk;
