import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchSquareBulk = ({
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
      d="M16.216 2.5H7.782C4.623 2.5 2.5 4.722 2.5 8.03v7.939c0 3.308 2.123 5.531 5.282 5.531h8.434c3.16 0 5.284-2.223 5.284-5.531V8.03c0-3.308-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.07 16.15a.75.75 0 0 1-1.061 0l-1.172-1.172a3.96 3.96 0 0 1-2.137.632 3.996 3.996 0 0 1-3.993-3.99c0-2.2 1.791-3.991 3.993-3.991a3.997 3.997 0 0 1 3.993 3.99c0 .872-.289 1.672-.765 2.329l1.142 1.14a.75.75 0 0 1 0 1.062M11.7 9.13a2.494 2.494 0 0 1 2.493 2.49 2.494 2.494 0 0 1-4.986 0A2.494 2.494 0 0 1 11.7 9.13"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchSquareBulk;