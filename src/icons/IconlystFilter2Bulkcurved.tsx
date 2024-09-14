import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilter2Bulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.105h-.271c-3.047-.01-5.259 0-6.753.404-1.689.458-2.476 1.474-2.476 3.196 0 2.138 1.926 3.776 3.789 5.36h.001c1.642 1.394 3.193 2.713 3.193 4.138 0 3.425 0 5.9 2.517 5.902z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="m12.253 22.105-.003-19h.268c3.056.001 5.26 0 6.755.404 1.689.458 2.477 1.474 2.477 3.196 0 2.138-1.927 3.776-3.79 5.36-1.643 1.394-3.193 2.713-3.193 4.138 0 3.426 0 5.902-2.514 5.902"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFilter2Bulkcurved;
