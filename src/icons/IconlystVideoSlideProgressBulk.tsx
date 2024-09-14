import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoSlideProgressBulk = ({
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
      d="M17.805 3.39H7.862a4.534 4.534 0 0 0-4.528 4.53v8.162a4.534 4.534 0 0 0 4.528 4.53h9.943a4.535 4.535 0 0 0 4.529-4.53V7.92a4.535 4.535 0 0 0-4.529-4.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.813 17.232h6.269a.75.75 0 0 0 0-1.5h-6.268v-.189a.75.75 0 1 0-1.5 0v1.65a.75.75 0 0 0 1.499.04M7.586 17.232h1.18a.75.75 0 0 0 0-1.5h-1.18a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.395 8.328c.074-.565.37-1.027.817-1.284.463-.263 1.034-.288 1.566-.063a7.7 7.7 0 0 1 2.345 1.47c.41.373.642.862.644 1.372.002.512-.227 1.006-.643 1.39l-.006.005a8.1 8.1 0 0 1-2.347 1.48 2 2 0 0 1-.747.147c-.298 0-.583-.076-.836-.226-.435-.259-.724-.724-.792-1.275a14 14 0 0 1-.001-3.016m1.819 2.978c-.126.05-.22.047-.258.026-.033-.02-.061-.087-.069-.155a12.4 12.4 0 0 1-.002-2.666c.006-.05.024-.135.074-.164a.16.16 0 0 1 .079-.017c.044 0 .101.01.17.04a6.2 6.2 0 0 1 1.903 1.19c.058.05.156.157.156.27 0 .115-.098.224-.158.279a6.6 6.6 0 0 1-1.895 1.197"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoSlideProgressBulk;
