import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper2Lines2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.963 21a4.12 4.12 0 0 1-4.12-4.12V7.12A4.12 4.12 0 0 1 7.964 3h8.074a4.12 4.12 0 0 1 4.12 4.12v9.76a4.12 4.12 0 0 1-4.12 4.12h-4.632M15.31 9.094H8.69m3.107 4.71H8.69"
    />
  </Svg>
);
export default IconlystDocumentPaper2Lines2Broken;
