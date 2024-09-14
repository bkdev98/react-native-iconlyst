import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTumblrBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.161 0 5.284-2.222 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.66 15.237a1.22 1.22 0 0 1-.86.354c-.512 0-.928-.418-.928-.96v-3.63h2.316a.75.75 0 0 0 0-1.5h-2.316v-.99l.001-.01v-.88a.75.75 0 0 0-1.5 0v.885c-.004.55-.45.995-1 .995a.75.75 0 0 0 0 1.5h1v3.66a2.43 2.43 0 0 0 2.426 2.43c.721 0 1.401-.279 1.915-.787a.75.75 0 1 0-1.054-1.067"
    />
  </Svg>
);
export default IconlystTumblrBulk;
