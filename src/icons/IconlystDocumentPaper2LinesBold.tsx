import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper2LinesBold = ({
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
      d="M15.312 15.655H8.69a.75.75 0 0 1 0-1.5h6.62a.75.75 0 0 1 0 1.5M8.69 9.445h3.108a.75.75 0 0 1 0 1.5H8.69a.75.75 0 0 1 0-1.5M16.036 2.5H7.964a4.624 4.624 0 0 0-4.62 4.62v9.76a4.625 4.625 0 0 0 4.62 4.62h8.073a4.626 4.626 0 0 0 4.62-4.62V7.12a4.625 4.625 0 0 0-4.62-4.62"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPaper2LinesBold;
