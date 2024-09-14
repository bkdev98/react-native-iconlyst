import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRecieve2Bulk = ({
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
      d="M20.379 11.664q.206 0 .41.012a.31.31 0 0 0 .333-.306V7.622c0-2.303-1.482-3.85-3.688-3.85H5.81c-2.206 0-3.688 1.547-3.688 3.85v7.4c0 2.303 1.482 3.85 3.689 3.85h7.194a.307.307 0 0 0 .304-.306q.001-.144.01-.286a7.074 7.074 0 0 1 7.06-6.616"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.66 16.937a.75.75 0 0 0-1.061 0l-.86.859v-3.243a.75.75 0 0 0-1.5 0v3.236l-.85-.851a.749.749 0 1 0-1.061 1.059l2.13 2.136a.74.74 0 0 0 .822.16c.044-.018.08-.052.12-.08.04-.027.085-.045.119-.08l2.14-2.135a.75.75 0 0 0 0-1.061M11.62 14.363a3.04 3.04 0 0 1-3.037-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-1.537-3.04c0-.85.69-1.54 1.538-1.54a1.54 1.54 0 0 1 0 3.08 1.54 1.54 0 0 1-1.538-1.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.239 8.521H5.836a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperRecieve2Bulk;
