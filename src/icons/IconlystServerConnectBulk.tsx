import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectBulk = ({
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
      d="M17.3 12.275c2.28 0 4.2-1.92 4.2-4.2s-1.92-4.2-4.2-4.2H6.7c-2.28 0-4.2 1.92-4.2 4.2s1.92 4.2 4.2 4.2h10.6"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.1 7.325c-.41 0-.75.34-.75.75s.34.75.75.75h3.6c.41 0 .75-.34.75-.75s-.34-.75-.75-.75zm-5.7 1.5h.5c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-.5c-.41 0-.75.34-.75.75s.34.75.75.75M11.25 12.275v3.28c-.7.23-1.24.77-1.47 1.47H5.8c-.41 0-.75.34-.75.75s.34.75.75.75h3.98c.31.94 1.17 1.6 2.22 1.6s1.91-.66 2.22-1.6h3.98c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-3.98c-.23-.7-.77-1.24-1.47-1.47v-3.28zm.76 6.396a.892.892 0 1 0 0-1.784.892.892 0 0 0 0 1.784"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerConnectBulk;
