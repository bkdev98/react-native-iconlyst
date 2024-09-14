import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStockAnalysisOutline = ({
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
      d="M5.75 2.369a.75.75 0 0 1 .75.75v2a.75.75 0 1 1-1.5 0v-2a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 6.598a2.23 2.23 0 0 1 2.234-2.23h1.531c1.232 0 2.235.996 2.235 2.23V9.64a2.23 2.23 0 0 1-2.235 2.228H4.984A2.23 2.23 0 0 1 2.75 9.64zm2.234-.73a.73.73 0 0 0-.734.73V9.64c0 .4.326.728.734.728h1.531a.73.73 0 0 0 .735-.728V6.598c0-.4-.326-.73-.735-.73z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.75 10.369a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75M12.5 5.369a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.5 10.098a2.23 2.23 0 0 1 2.234-2.23h1.531c1.232 0 2.235.996 2.235 2.23v7.042a2.23 2.23 0 0 1-2.235 2.229h-1.531A2.23 2.23 0 0 1 9.5 17.14zm2.234-.73a.73.73 0 0 0-.734.73v7.042c0 .4.326.729.734.729h1.531A.73.73 0 0 0 14 17.14v-7.042c0-.4-.326-.73-.735-.73z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.5 17.869a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75M19.25 4.369a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.25 9.098a2.23 2.23 0 0 1 2.234-2.23h1.531c1.232 0 2.235.996 2.235 2.23v.043a2.23 2.23 0 0 1-2.235 2.228h-1.531A2.23 2.23 0 0 1 16.25 9.14zm2.234-.73a.73.73 0 0 0-.734.73v.043c0 .4.326.728.734.728h1.531a.73.73 0 0 0 .735-.728v-.043c0-.4-.326-.73-.735-.73z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.25 9.869a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStockAnalysisOutline;
