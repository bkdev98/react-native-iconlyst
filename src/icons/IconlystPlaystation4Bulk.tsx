import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaystation4Bulk = ({
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
      <Path d="M15.335 9.15a1 1 0 0 0-1-1h-1.06c-1.754.014-2.904 1.155-2.928 2.91l-.019 1.858c-.009.666-.273.927-.935.932H8.34a1 1 0 1 0 0 2H9.4c1.756-.013 2.906-1.155 2.928-2.91l.02-1.856c.008-.666.272-.929.935-.934h1.052a1 1 0 0 0 1-1M8.765 10.67c0-1.4-1.138-2.54-2.536-2.54h-3.23a1 1 0 1 0 0 2h3.23c.296 0 .536.243.536.54 0 .299-.237.54-.528.54h-1.86A2.38 2.38 0 0 0 2 13.59v1.28a1 1 0 1 0 2 0v-1.28c0-.208.169-.38.376-.38h1.86a2.537 2.537 0 0 0 2.528-2.54" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.532 12.55h-.885l.885-.927zm2.468 0h-.468V9.13a1 1 0 0 0-1.723-.69l-4.223 4.42a.998.998 0 0 0 .722 1.69h3.224v.3a1 1 0 1 0 2 0v-.3H21a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlaystation4Bulk;
