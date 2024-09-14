import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper3LinesTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.463 21h8.074a4.12 4.12 0 0 0 4.12-4.12V7.12A4.12 4.12 0 0 0 16.537 3H8.463a4.12 4.12 0 0 0-4.12 4.12v9.76A4.12 4.12 0 0 0 8.464 21"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.81 15.92H9.19m6.62-4.057H9.19m2.526-4.047H9.19"
    />
  </Svg>
);
export default IconlystDocumentPaper3LinesTwoTone;
