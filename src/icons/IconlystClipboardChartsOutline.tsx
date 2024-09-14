import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClipboardChartsOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.177 3.87a.606.606 0 0 0-.607.605v.573c0 .335.272.607.607.607h4.646a.606.606 0 0 0 .607-.607v-.573a.606.606 0 0 0-.607-.606zm-2.107.605c0-1.163.943-2.106 2.107-2.106h4.646c1.164 0 2.107.943 2.107 2.106v.573a2.106 2.106 0 0 1-2.107 2.107h-4.646A2.106 2.106 0 0 1 8.07 5.048z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.821 5.463a3.005 3.005 0 0 0-3.005 3.004v8.898a3.005 3.005 0 0 0 3.005 3.005h7.36a3.005 3.005 0 0 0 3.004-3.005V8.467a3.005 3.005 0 0 0-3.005-3.004.75.75 0 1 1 0-1.5 4.505 4.505 0 0 1 4.505 4.504v8.898a4.505 4.505 0 0 1-4.505 4.505H8.821a4.505 4.505 0 0 1-4.505-4.505V8.467a4.505 4.505 0 0 1 4.505-4.504.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.464 14.3a.75.75 0 0 1 .75.75v2.094a.75.75 0 0 1-1.5 0V15.05a.75.75 0 0 1 .75-.75M11.235 13.533a.75.75 0 0 1 .75.75v2.86a.75.75 0 0 1-1.5 0v-2.86a.75.75 0 0 1 .75-.75M13.85 15.62a.75.75 0 0 1 .75.75v.773a.75.75 0 1 1-1.5 0v-.773a.75.75 0 0 1 .75-.75M8.545 15.62a.75.75 0 0 1 .75.75v.773a.75.75 0 1 1-1.5 0v-.773a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.312 8.797a.75.75 0 0 1 .04 1.06l-2.7 2.906a.75.75 0 0 1-.96.117l-2.615-1.712-2.328 2.522a.75.75 0 1 1-1.102-1.017l2.758-2.99a.75.75 0 0 1 .962-.118l2.617 1.713 2.269-2.442a.75.75 0 0 1 1.06-.039"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClipboardChartsOutline;
