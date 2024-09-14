import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperSend2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.379 11.664q.207 0 .411.012a.31.31 0 0 0 .332-.306V7.621c0-2.303-1.481-3.85-3.688-3.85H5.81c-2.206 0-3.688 1.547-3.688 3.85v7.4c0 2.303 1.482 3.85 3.689 3.85h7.194a.31.31 0 0 0 .305-.306q.003-.218.021-.432a7.074 7.074 0 0 1 7.048-6.47"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.659 16.157-2.14-2.136a.7.7 0 0 0-.191-.127c-.018-.008-.03-.024-.048-.031a.8.8 0 0 0-.291-.06h-.001a.75.75 0 0 0-.53.22l-2.13 2.137a.749.749 0 1 0 1.062 1.058l.849-.852v3.236a.75.75 0 0 0 1.5 0v-3.24l.859.858a.751.751 0 0 0 1.06-1.062M11.62 14.362a3.04 3.04 0 0 1-3.037-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-1.537-3.04c0-.85.69-1.54 1.538-1.54a1.54 1.54 0 0 1 0 3.08 1.54 1.54 0 0 1-1.538-1.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.239 8.521H5.836a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperSend2Bulk;
