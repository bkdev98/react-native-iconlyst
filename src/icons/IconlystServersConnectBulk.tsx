import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServersConnectBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.85 2.055H6.15c-1.32 0-2.4 1.08-2.4 2.4v2c0 .83.42 1.55 1.05 1.99.41-.22.86-.35 1.35-.35h11.7c.49 0 .94.13 1.35.35.63-.44 1.05-1.16 1.05-1.99v-2c0-1.32-1.08-2.4-2.4-2.4M17.85 9.104H6.15c-1.32 0-2.4 1.08-2.4 2.4v2a2.4 2.4 0 0 0 2.4 2.4h11.7a2.4 2.4 0 0 0 2.4-2.4v-2c0-1.32-1.08-2.4-2.4-2.4" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.15 6.205h-.5a.749.749 0 1 1 0-1.5h.5a.749.749 0 1 1 0 1.5M7.65 13.255h.5a.749.749 0 1 0 0-1.5h-.5a.749.749 0 1 0 0 1.5M11.3 15.904v1.47c-.7.23-1.24.77-1.47 1.47H5.85c-.41 0-.75.34-.75.75s.34.75.75.75h3.98c.31.94 1.17 1.6 2.22 1.6s1.91-.66 2.22-1.6h3.98c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.98c-.23-.7-.77-1.24-1.47-1.47v-1.47zm.75 4.54c.48 0 .85-.37.85-.85s-.37-.85-.85-.85-.85.37-.85.85.37.85.85.85"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServersConnectBulk;
