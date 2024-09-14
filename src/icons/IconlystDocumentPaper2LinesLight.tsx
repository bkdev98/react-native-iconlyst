import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper2LinesLight = ({
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
      d="M7.963 21h8.074a4.12 4.12 0 0 0 4.12-4.12V7.12A4.12 4.12 0 0 0 16.037 3H7.963a4.12 4.12 0 0 0-4.12 4.12v9.76A4.12 4.12 0 0 0 7.964 21M15.312 14.905h-6.62m3.107-4.71H8.691"
    />
  </Svg>
);
export default IconlystDocumentPaper2LinesLight;
