import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayLeftBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.303 7.199c-.243-1.507-.798-2.535-1.65-3.056-.78-.476-1.786-.52-3.023-.118-2.735 1.102-6.451 3.43-8.64 5.409-1.034.91-1.558 1.858-1.558 2.818s.525 1.907 1.553 2.81c2.19 1.985 5.908 4.314 8.645 5.417l.036.012a5 5 0 0 0 1.496.257q.864 0 1.517-.405c.846-.524 1.393-1.548 1.627-3.062a44 44 0 0 0 .262-5.028 44 44 0 0 0-.265-5.054"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlayLeftBulk;
