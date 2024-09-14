import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentsBold = ({
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
      d="M17.238 8.84H6.763a3.82 3.82 0 0 0-3.813 3.813v5.156a3.82 3.82 0 0 0 3.813 3.814h10.475a3.82 3.82 0 0 0 3.813-3.814v-5.156a3.817 3.817 0 0 0-3.813-3.813M6.182 6.987h11.637a.75.75 0 0 0 0-1.5H6.182a.75.75 0 0 0 0 1.5M8.72 3.875h6.561a.75.75 0 1 0 0-1.5H8.72a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentsBold;
