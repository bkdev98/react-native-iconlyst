import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart4Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.09 12.246c.001-2.781 2.037-4.96 4.634-4.96.15 0 .246-.158.156-.278a4.46 4.46 0 0 0-3.365-1.81 4.84 4.84 0 0 0-2.167.39c-.61.268-1.092.778-1.488 1.253-.575-.217-1.236-.431-1.88-.372a4.7 4.7 0 0 0-2.117.696C2.34 8.767 2.264 11.992 3.646 14.18c2.152 3.467 7.836 4.573 8.077 4.618a.49.49 0 0 0 .411-.106c.03-.026.453-.377 1.04-.969a.3.3 0 0 0 .017-.4c-.934-1.167-2.091-3.022-2.102-5.066z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.956 10.452a3.1 3.1 0 0 0-1.355-.537c-.392-.057-.785.026-1.138.13-.233-.304-.5-.59-.85-.78a3.1 3.1 0 0 0-1.42-.344c-1.962 0-3.135 1.759-3.136 3.46v.003c.014 2.646 2.642 5.11 2.754 5.214a.5.5 0 0 0 .403.128c.154-.02 3.78-.503 5.281-2.633.988-1.376 1.06-3.487-.539-4.641"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoubleHeart4Bulk;
