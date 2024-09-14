import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTiredBulk = ({
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
      d="M16.717 2.5H8.283C5.123 2.5 3 4.72 3 8.026v7.947C3 19.279 5.123 21.5 8.283 21.5h8.433c3.16 0 5.284-2.221 5.284-5.527V8.026C22 4.72 19.877 2.5 16.717 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.432 10.095a.75.75 0 0 1-.797 1.27l-1.8-1.126a.754.754 0 0 1 .002-1.273l1.8-1.119a.75.75 0 0 1 .793 1.273l-.78.485zM15.388 16.862H9.614c-.277 0-.5-.204-.5-.456 0-1.811 1.519-3.284 3.386-3.284 1.869 0 3.388 1.473 3.388 3.284 0 .252-.224.456-.5.456M7.969 11.48a.751.751 0 0 1-.399-1.386l.78-.489-.778-.485a.75.75 0 1 1 .793-1.273l1.799 1.12a.748.748 0 0 1 .002 1.272l-1.8 1.127a.75.75 0 0 1-.397.114"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTiredBulk;
