import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartFunEmojiBold = ({
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
      d="M17.79 3.524c1.702.546 3.014 1.771 3.695 3.452.634 1.564.681 3.371.13 5.087-1.722 5.267-8.614 8.523-8.906 8.659a.5.5 0 0 1-.423 0c-.297-.139-7.292-3.452-8.916-8.664-1.043-3.245.106-7.327 3.836-8.534a6.3 6.3 0 0 1 2.91-.197c.896.151 1.725.695 2.381 1.171.68-.497 1.49-1.032 2.382-1.181a6.15 6.15 0 0 1 2.911.207M9.79 10.14a.75.75 0 0 1-.75-.75c0-.414.336-.755.75-.755s.75.33.75.744v.01a.75.75 0 0 1-.75.75m5.412 0a.75.75 0 0 1-.75-.75c0-.414.336-.755.75-.755s.75.33.75.744v.01a.75.75 0 0 1-.75.75m-5.09 3.53c.635.732 1.44 1.127 2.338 1.14.899 0 1.675-.367 2.372-1.123a.75.75 0 0 0-1.102-1.018c-.414.45-.794.64-1.26.64-.46-.006-.857-.21-1.214-.621a.75.75 0 0 0-1.134.981"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartFunEmojiBold;
