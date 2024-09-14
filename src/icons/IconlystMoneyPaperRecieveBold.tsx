import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperRecieveBold = ({
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
      d="M11.425 9.977a1.54 1.54 0 0 0 0 3.08 1.54 1.54 0 0 0 0-3.08"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.425 14.557a3.041 3.041 0 0 1 0-6.08 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-4.382-5.84H5.641a.75.75 0 0 1 0-1.5h1.402a.75.75 0 0 1 0 1.5m13.14 3.142q.208 0 .412.012a.31.31 0 0 0 .331-.306V7.819c0-2.303-1.48-3.851-3.688-3.851H5.614c-2.206 0-3.688 1.548-3.688 3.85v7.4c0 2.303 1.482 3.85 3.69 3.85h7.2a.3.3 0 0 0 .3-.3 5 5 0 0 1 .012-.341 7.074 7.074 0 0 1 7.055-6.567M21.324 16.528h-3.242l.858-.859a.75.75 0 0 0-1.06-1.06l-2.137 2.14a.75.75 0 0 0 0 1.06l2.138 2.13a.747.747 0 0 0 1.06-.002.75.75 0 0 0-.002-1.06l-.851-.849h3.236a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperRecieveBold;
