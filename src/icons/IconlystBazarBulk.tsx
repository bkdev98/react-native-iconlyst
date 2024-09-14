import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBazarBulk = ({
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
      d="M16.684 3.38H7.316C4.435 3.38 2.5 5.403 2.5 8.41v7.18c0 3.01 1.935 5.03 4.816 5.03h9.367c2.881 0 4.817-2.02 4.817-5.03V8.41c0-3.008-1.936-5.03-4.816-5.03"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M16.748 14.08h1.288a.75.75 0 0 0 0-1.5h-1.288a.53.53 0 0 1-.531-.53V9.03a.75.75 0 0 0-1.5 0v3.02c0 1.119.91 2.03 2.03 2.03M15.467 16.58h.01a.746.746 0 0 0 .745-.75.755.755 0 0 0-.755-.75.75.75 0 0 0 0 1.5M12.393 9.04c0 .414.336.745.75.745s.75-.341.75-.755a.75.75 0 0 0-1.5 0zM11.862 15.809c1.12 0 2.03-.91 2.03-2.03v-1.91a.75.75 0 0 0-1.5 0v1.91a.53.53 0 0 1-.53.53h-.956a.75.75 0 0 0 0 1.5zM9.814 8.17v4.26a.75.75 0 0 0 1.5 0V8.17a.75.75 0 0 0-1.5 0M6.918 14.08c1.12 0 2.032-.911 2.032-2.03v-1.901a.75.75 0 0 0-1.5 0v1.9c0 .293-.24.53-.532.53h-.955a.75.75 0 0 0 0 1.5z"
    />
  </Svg>
);
export default IconlystBazarBulk;
