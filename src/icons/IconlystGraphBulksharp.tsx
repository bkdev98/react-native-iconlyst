import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphBulksharp = ({
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
      d="M11.223 5.241h-.5a8.23 8.23 0 0 0-4.586 1.391 8.23 8.23 0 0 0-3.04 3.704 8.22 8.22 0 0 0-.469 4.77 8.2 8.2 0 0 0 2.26 4.225 8.22 8.22 0 0 0 4.224 2.26q.805.16 1.615.16a8.2 8.2 0 0 0 3.154-.63 8.2 8.2 0 0 0 3.704-3.04 8.23 8.23 0 0 0 1.391-4.585v-.5h-7.753z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.614 4.667a8.2 8.2 0 0 0-5.836-2.417h-.5v8.753h8.754v-.5a8.2 8.2 0 0 0-2.418-5.836"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGraphBulksharp;
