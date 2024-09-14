import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDollar2Bulk = ({
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
      d="M12.998 16.43V5.063a1 1 0 1 0-2 0v14a1 1 0 0 0 2 0V16.43"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M14.556 14.852c0-.86-.697-1.56-1.558-1.568l-2-.014a3.68 3.68 0 0 1-3.554-3.667c0-1.983 1.584-3.592 3.554-3.66l2-.011h.34a3.217 3.217 0 0 1 3.217 3.21v.129a1 1 0 1 1-2 0v-.13c0-.666-.546-1.21-1.217-1.21l-2.34.013a1.67 1.67 0 0 0-1.554 1.658c0 .884.688 1.603 1.554 1.668l2 .014a3.575 3.575 0 0 1 3.558 3.568 3.58 3.58 0 0 1-3.558 3.578l-2 .002h-.336a3.22 3.22 0 0 1-3.216-3.22 1 1 0 1 1 2 0c0 .673.545 1.22 1.216 1.22h.336l2-.002a1.58 1.58 0 0 0 1.558-1.578"
    />
  </Svg>
);
export default IconlystDollar2Bulk;
