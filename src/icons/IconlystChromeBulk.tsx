import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChromeBulk = ({
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
      <Path d="M7.331 10.097c.087.15.317.127.385-.033.703-1.661 2.33-2.836 4.244-2.836h7.718c.232 0 .375-.25.247-.444C18.225 4.208 15.31 2.5 12 2.5a9.47 9.47 0 0 0-7.02 3.12.29.29 0 0 0-.036.345zM10.225 21.133l2.518-4.366c.086-.15-.049-.337-.221-.314a4 4 0 0 1-.562.037c-1.69 0-3.156-.919-3.965-2.275-.011-.016-.03-.023-.04-.04l-3.83-6.627a.288.288 0 0 0-.504.001A9.4 9.4 0 0 0 2.5 12c0 4.543 3.204 8.347 7.471 9.279.108.023.199-.05.254-.146M15.807 8.728c-.175 0-.268.211-.162.35.59.775.946 1.735.946 2.782a4.6 4.6 0 0 1-.589 2.214c-.013.034-.015.069-.034.101l-4.092 7.098c-.056.097.012.227.124.227 5.238 0 9.5-4.261 9.5-9.5 0-1.08-.19-2.116-.526-3.084a.29.29 0 0 0-.278-.197c-.734.002-3.252.008-4.89.009" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.83 11.859a3.134 3.134 0 0 0 3.13 3.13 3.134 3.134 0 0 0 3.131-3.13 3.135 3.135 0 0 0-3.13-3.132 3.135 3.135 0 0 0-3.132 3.132"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChromeBulk;
