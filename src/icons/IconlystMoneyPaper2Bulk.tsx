import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaper2Bulk = ({
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
      d="M17.812 4.45H6.188C3.982 4.45 2.5 5.995 2.5 8.3v7.4c0 2.302 1.482 3.85 3.688 3.85h11.623c2.207 0 3.689-1.548 3.689-3.85V8.3c0-2.304-1.482-3.85-3.688-3.85"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.383 9.2h1.403a.75.75 0 0 0 0-1.5h-1.403a.75.75 0 0 0 0 1.5M8.963 12A3.04 3.04 0 0 0 12 15.04 3.04 3.04 0 0 0 15.039 12 3.04 3.04 0 0 0 12 8.96 3.04 3.04 0 0 0 8.963 12m-2.748 4.3h1.403a.75.75 0 0 0 0-1.5H6.215a.75.75 0 0 0 0 1.5m4.248-4.301c0-.85.69-1.54 1.538-1.54a1.54 1.54 0 0 1 0 3.08 1.54 1.54 0 0 1-1.538-1.54"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaper2Bulk;
