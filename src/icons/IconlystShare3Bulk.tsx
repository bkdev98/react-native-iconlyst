import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare3Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M4.615 11.905a.749.749 0 0 0 .923-.522A6.69 6.69 0 0 1 9.765 6.87a.751.751 0 0 0-.497-1.416 8.19 8.19 0 0 0-5.175 5.527.75.75 0 0 0 .522.924M19.299 15.132a.749.749 0 0 1-.74-.876 6.72 6.72 0 0 0-2.157-6.124.751.751 0 0 1 .994-1.124 8.24 8.24 0 0 1 2.64 7.5.75.75 0 0 1-.738.624M11.999 21.35c-1.912 0-3.8-.67-5.287-1.92a.75.75 0 0 1 .965-1.148 6.73 6.73 0 0 0 5.813 1.4.749.749 0 1 1 .339 1.46 8 8 0 0 1-1.83.208" />
    </G>
    <Path
      fill={props.color}
      d="M8.974 5.745a3.1 3.1 0 0 0 3.095 3.094 3.1 3.1 0 0 0 3.094-3.094 3.1 3.1 0 0 0-3.094-3.095 3.1 3.1 0 0 0-3.095 3.095M15.311 16.81a3.1 3.1 0 0 0 3.095 3.095A3.1 3.1 0 0 0 21.5 16.81a3.1 3.1 0 0 0-3.094-3.095 3.1 3.1 0 0 0-3.095 3.095M2.5 16.81a3.1 3.1 0 0 0 3.095 3.095 3.1 3.1 0 0 0 3.094-3.095 3.1 3.1 0 0 0-3.094-3.095A3.1 3.1 0 0 0 2.5 16.81"
    />
  </Svg>
);
export default IconlystShare3Bulk;
