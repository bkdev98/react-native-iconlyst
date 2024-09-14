import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst4KFormatBold = ({
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
      d="M18.244 13.755a.751.751 0 0 1-.963 1.15l-2.168-1.815v1.42a.75.75 0 0 1-1.5 0V9.48a.75.75 0 0 1 1.5 0v1.431l2.168-1.816a.751.751 0 0 1 .963 1.15L16.148 12zm-6.321.455h-.286v.48a.75.75 0 0 1-1.5 0v-.48H7.904a.748.748 0 0 1-.608-1.188l2.982-4.141a.75.75 0 0 1 1.359.438v3.391h.286a.75.75 0 0 1 0 1.5M17.051 2.5H8.617c-3.16 0-5.283 2.223-5.283 5.53v7.94c0 3.307 2.123 5.53 5.283 5.53h8.433c3.161 0 5.284-2.223 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.136 12.71v-1.066l-.768 1.066z"
      clipRule="evenodd"
    />
  </Svg>
);
export default Iconlyst4KFormatBold;
