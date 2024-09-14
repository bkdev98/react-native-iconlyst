import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPaper2LinesOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M8.213 3.75a3.37 3.37 0 0 0-3.37 3.37v9.76a3.37 3.37 0 0 0 3.37 3.37h8.074a3.37 3.37 0 0 0 3.37-3.37V7.12a3.37 3.37 0 0 0-3.37-3.37zm-4.87 3.37a4.87 4.87 0 0 1 4.87-4.87h8.074a4.87 4.87 0 0 1 4.87 4.87v9.76a4.87 4.87 0 0 1-4.87 4.87H8.213a4.87 4.87 0 0 1-4.87-4.87z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.191 10.195a.75.75 0 0 1 .75-.75h3.108a.75.75 0 0 1 0 1.5H8.941a.75.75 0 0 1-.75-.75m0 4.71a.75.75 0 0 1 .75-.75h6.62a.75.75 0 0 1 0 1.5h-6.62a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDocumentPaper2LinesOutline;
