import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KFormatBulk = ({
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
      d="M17.051 2.5H8.617c-3.16 0-5.283 2.223-5.283 5.53v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M18.338 14.813a.75.75 0 0 0-.094-1.057L16.148 12l2.096-1.755a.75.75 0 1 0-.963-1.15l-2.168 1.816V9.48a.75.75 0 0 0-1.5 0v5.03a.75.75 0 0 0 1.5 0v-1.42l2.168 1.815a.754.754 0 0 0 1.057-.093"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.923 14.21h-.286v.48a.75.75 0 0 1-1.5 0v-.48H7.904a.748.748 0 0 1-.608-1.187l2.982-4.141a.75.75 0 0 1 1.36.438v3.39h.285a.75.75 0 0 1 0 1.5m-1.786-2.566v1.066h-.768z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4KFormatBulk;
