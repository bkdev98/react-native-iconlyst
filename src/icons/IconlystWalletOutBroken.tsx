import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletOutBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.518 14.645V9.356M10.185 12.97 8.52 14.644l-1.665-1.672M15.592 12.002h-.001M3.25 8.79a4.703 4.703 0 0 1 4.703-4.704h6.845a4.704 4.704 0 0 1 4.704 4.704v.796M15.226 14.413a1.86 1.86 0 0 1-1.86-1.861v-1.098a1.86 1.86 0 0 1 1.86-1.86h4.164a1.86 1.86 0 0 1 1.86 1.86v1.098a1.86 1.86 0 0 1-1.86 1.86H17.6"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.502 14.402v.817a4.7 4.7 0 0 1-4.704 4.696H7.953a4.7 4.7 0 0 1-4.703-4.696v-3.75"
    />
  </Svg>
);
export default IconlystWalletOutBroken;
