import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsRightSquareOutline = ({
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
      d="M12.415 12.895a.75.75 0 0 1 1.06.002l2.132 2.138a.75.75 0 0 1 0 1.059l-2.131 2.138a.75.75 0 1 1-1.063-1.059l.857-.859H3a.75.75 0 0 1 0-1.5h10.27l-.857-.859a.75.75 0 0 1 .002-1.06M12.415 5.766a.75.75 0 0 1 1.06.002l2.132 2.139a.75.75 0 0 1 0 1.058l-2.131 2.139a.75.75 0 1 1-1.063-1.06l.857-.858H3a.75.75 0 0 1 0-1.5h10.27l-.857-.859a.75.75 0 0 1 .002-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.898 3.737c1.05-.978 2.501-1.487 4.128-1.487h7.948c1.628 0 3.078.511 4.129 1.49 1.056.985 1.647 2.387 1.647 4.042v8.435c0 1.66-.59 3.062-1.648 4.046-1.05.978-2.5 1.487-4.128 1.487H8.026c-1.627 0-3.078-.509-4.128-1.487-1.057-.984-1.648-2.387-1.648-4.047V7.782c0-1.659.59-3.061 1.648-4.045M4.92 4.835c-.72.67-1.17 1.659-1.17 2.947v8.434c0 1.29.45 2.279 1.17 2.95.726.675 1.789 1.084 3.106 1.084h7.948c1.317 0 2.38-.409 3.106-1.085.72-.67 1.17-1.66 1.17-2.948V7.782c0-1.284-.45-2.273-1.17-2.944-.727-.678-1.79-1.088-3.106-1.088H8.026c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsRightSquareOutline;
