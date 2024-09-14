import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCandleChart2LineOutline = ({
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
      d="M7.75 21.869a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 1 0-1.5 0v6.5c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.75 13.14a2.23 2.23 0 0 0 2.234 2.229h1.531a2.23 2.23 0 0 0 2.235-2.23V7.098a2.23 2.23 0 0 0-2.235-2.228H6.984A2.23 2.23 0 0 0 4.75 7.097zm2.234.729a.73.73 0 0 1-.734-.73V7.098c0-.4.326-.728.734-.728h1.531a.73.73 0 0 1 .735.728v6.043c0 .4-.326.729-.735.729z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.75 6.369a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .414.336.75.75.75M17.25 21.869a.75.75 0 0 0 .75-.75v-2.5a.75.75 0 1 0-1.5 0v2.5c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.25 17.14a2.23 2.23 0 0 0 2.234 2.229h1.531a2.23 2.23 0 0 0 2.235-2.23v-6.042a2.23 2.23 0 0 0-2.235-2.228h-1.531a2.23 2.23 0 0 0-2.234 2.228zm2.234.729a.73.73 0 0 1-.734-.73v-6.042c0-.4.326-.728.734-.728h1.531a.73.73 0 0 1 .735.728v6.043c0 .4-.326.729-.735.729z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.25 10.369a.75.75 0 0 0 .75-.75v-6.5a.75.75 0 0 0-1.5 0v6.5c0 .414.336.75.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCandleChart2LineOutline;
