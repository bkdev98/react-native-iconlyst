import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChristmasMittensBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.265 7.649a.75.75 0 0 1 .994 0l1.328 1.173a.3.3 0 0 0 .398 0l1.326-1.173a.75.75 0 0 1 .994 0l1.326 1.173a.3.3 0 0 0 .398 0l1.151-1.017a.29.29 0 0 0 .097-.265c-.43-2.645-2.727-4.675-5.492-4.675S4.723 4.895 4.293 7.54a.29.29 0 0 0 .096.265l1.152 1.017a.3.3 0 0 0 .398 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.405 9.465c-.941-.941-2.416-1.042-3.485-.312l-.551.487-.014.014-1.028.907a.75.75 0 0 1-.994-.001l-1.326-1.173a.3.3 0 0 0-.398 0l-1.326 1.173a.75.75 0 0 1-.994 0L7.961 9.387a.3.3 0 0 0-.398 0L6.237 10.56a.75.75 0 0 1-.994 0l-.53-.468a.3.3 0 0 0-.498.225v5.598c0 .235.262.383.48.293a3.65 3.65 0 0 1 1.41-.273h7.69c.765 0 1.461.225 2.013.606.127.087.3.08.41-.029l3.187-3.177c.52-.52.8-1.2.8-1.93s-.28-1.42-.8-1.94M13.793 16.94h-7.69c-1.337 0-2.307.87-2.307 2.068v1.286c0 1.175.945 1.935 2.028 2.054.165.018.3-.118.3-.283V20.15a.75.75 0 0 1 1.5 0v1.915a.3.3 0 0 0 .3.3h.974a.3.3 0 0 0 .3-.3V20.15a.75.75 0 0 1 1.5 0v1.915a.3.3 0 0 0 .3.3h.974a.3.3 0 0 0 .3-.3V20.15a.75.75 0 0 1 1.5 0v1.915c0 .165.135.301.3.283 1.082-.119 2.028-.88 2.028-2.054l.001-1.286c0-1.198-.97-2.068-2.308-2.068"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChristmasMittensBold;
