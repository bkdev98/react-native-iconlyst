import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsLeftSquareOutline = ({
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
      d="M11.585 12.895a.75.75 0 0 1 .002 1.06l-.856.86h10.27a.75.75 0 0 1 0 1.5H10.73l.856.858a.75.75 0 0 1-1.062 1.06l-2.131-2.14a.75.75 0 0 1 0-1.058l2.13-2.138a.75.75 0 0 1 1.061-.002M11.585 5.766a.75.75 0 0 1 .002 1.061l-.856.86h10.27a.75.75 0 0 1 0 1.5H10.73l.856.858a.75.75 0 0 1-1.062 1.059L8.394 8.965a.75.75 0 0 1 0-1.058l2.13-2.139a.75.75 0 0 1 1.061-.002"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.974 3.75H8.027c-1.317 0-2.38.41-3.106 1.088-.721.672-1.17 1.66-1.17 2.944v8.435c0 1.289.45 2.278 1.17 2.948.725.677 1.788 1.085 3.106 1.085h7.947c1.318 0 2.38-.409 3.107-1.085.72-.67 1.17-1.66 1.17-2.949V7.782c0-1.288-.45-2.277-1.17-2.947-.726-.676-1.79-1.085-3.107-1.085m-7.947-1.5h7.947c1.628 0 3.078.509 4.129 1.487 1.057.984 1.647 2.386 1.647 4.045v8.434c0 1.66-.59 3.063-1.647 4.047-1.05.979-2.501 1.487-4.129 1.487H8.027c-1.628 0-3.078-.508-4.129-1.487-1.057-.984-1.648-2.387-1.648-4.046V7.782c0-1.655.592-3.057 1.648-4.041 1.05-.98 2.5-1.49 4.129-1.49"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsLeftSquareOutline;
