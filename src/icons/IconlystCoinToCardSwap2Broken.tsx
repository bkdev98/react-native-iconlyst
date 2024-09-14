import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoinToCardSwap2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.718 7.564 4.36 8.924 3 7.563"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.357 8.846V6.795a3.396 3.396 0 0 1 3.397-3.397M18.281 16.472l1.359-1.359 1.358 1.359"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.64 15.191v2.051a3.396 3.396 0 0 1-3.396 3.397M5 20.64c-1.233 0-2-.87-2-2.1v-3.322c0-1.231.771-2.1 2-2.1h5.077c1.232 0 1.998.869 1.998 2.1v3.322c0 1.23-.766 2.1-1.998 2.1H7.538M3 15.787h6.673M20.668 7.16a3.8 3.8 0 1 0-1.105 2.677"
    />
  </Svg>
);
export default IconlystCoinToCardSwap2Broken;
