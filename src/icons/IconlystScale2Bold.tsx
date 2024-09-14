import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale2Bold = ({
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
      d="M12 7.676a4.08 4.08 0 0 0-3.923 2.973c-.051.18.091.352.279.352h2.794a.1.1 0 0 0 .1-.1V9.728a.75.75 0 0 1 1.5 0V10.9a.1.1 0 0 0 .1.1h2.796c.187 0 .33-.171.279-.352A4.08 4.08 0 0 0 12 7.676"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.826 12.501h-9.65a.75.75 0 0 1-.75-.75 5.58 5.58 0 0 1 5.575-5.575 5.58 5.58 0 0 1 5.575 5.575.75.75 0 0 1-.75.75M16.217 2.5H7.782C4.623 2.5 2.5 4.721 2.5 8.026v7.948c0 3.305 2.123 5.526 5.282 5.526h3.168a.3.3 0 0 0 .3-.3v-4.707a.75.75 0 0 1 1.5 0V21.2a.3.3 0 0 0 .3.3h3.166c3.16 0 5.284-2.221 5.284-5.526V8.026c0-3.305-2.123-5.526-5.283-5.526"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale2Bold;
