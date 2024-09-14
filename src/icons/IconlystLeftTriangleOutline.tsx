import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftTriangleOutline = ({
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
      d="M11.88 10.75a.75.75 0 0 1-.002 1.061l-1.062 1.057H15a.75.75 0 0 1 0 1.5h-4.185l1.063 1.06a.75.75 0 1 1-1.058 1.063L8.47 14.15a.75.75 0 0 1 0-1.063l2.35-2.339a.75.75 0 0 1 1.06.003"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.032 5.272a1.243 1.243 0 0 0-2.156.005l-6.96 12.215a1.244 1.244 0 0 0 1.08 1.859h14.008a1.243 1.243 0 0 0 1.077-1.864zm1.3-.75c-1.059-1.835-3.71-1.829-4.76.012L2.612 16.75c-1.04 1.829.28 4.102 2.384 4.102h14.008c2.111 0 3.43-2.285 2.376-4.114z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftTriangleOutline;
