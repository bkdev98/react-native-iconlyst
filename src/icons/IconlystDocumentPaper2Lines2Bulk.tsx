import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper2Lines2Bulk = ({
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
      d="M16.037 2.5H7.963a4.624 4.624 0 0 0-4.62 4.62v9.76a4.625 4.625 0 0 0 4.62 4.62h8.073a4.626 4.626 0 0 0 4.62-4.62V7.12a4.625 4.625 0 0 0-4.62-4.62"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.309 9.844H8.688a.75.75 0 0 1 0-1.5h6.621a.75.75 0 0 1 0 1.5m-3.513 4.71H8.688a.75.75 0 0 1 0-1.5h3.108a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPaper2Lines2Bulk;
