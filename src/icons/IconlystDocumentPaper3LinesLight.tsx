import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper3LinesLight = ({
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
      d="M7.963 21h8.074a4.12 4.12 0 0 0 4.12-4.12V7.12A4.12 4.12 0 0 0 16.037 3H7.963a4.12 4.12 0 0 0-4.12 4.12v9.76A4.12 4.12 0 0 0 7.964 21M15.31 15.92H8.69m6.62-4.057H8.69m2.526-4.047H8.69"
    />
  </Svg>
);
export default IconlystDocumentPaper3LinesLight;
