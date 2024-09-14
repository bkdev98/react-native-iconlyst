import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper2Lines2TwoTone = ({
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
      d="M8.463 3h8.074a4.12 4.12 0 0 1 4.12 4.12v9.76a4.12 4.12 0 0 1-4.12 4.12H8.463a4.12 4.12 0 0 1-4.12-4.12V7.12A4.12 4.12 0 0 1 8.464 3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.81 9.094H9.19m3.107 4.71H9.19"
    />
  </Svg>
);
export default IconlystDocumentPaper2Lines2TwoTone;
