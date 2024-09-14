import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorDisplayCurvedStandBulk = ({
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
      d="M17.981 2.313H6.02a3.504 3.504 0 0 0-3.501 3.5v7.485a3.505 3.505 0 0 0 3.501 3.501h11.961c1.93 0 3.5-1.57 3.5-3.501V5.812c0-1.93-1.57-3.5-3.5-3.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.57 19.985c-3.623-1.247-9.517-1.247-13.136 0a.87.87 0 0 0-.502.444.876.876 0 0 0 1.071 1.21c3.308-1.138 8.69-1.138 11.997 0a.885.885 0 0 0 1.112-.542.87.87 0 0 0-.041-.668.87.87 0 0 0-.501-.444"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorDisplayCurvedStandBulk;
