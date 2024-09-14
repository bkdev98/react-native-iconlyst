import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletLight = ({
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
      d="M7.32 3.688h9.36A4.32 4.32 0 0 1 21 8.008v7.98a4.32 4.32 0 0 1-4.32 4.32H7.32A4.32 4.32 0 0 1 3 15.989v-7.98a4.32 4.32 0 0 1 4.32-4.32"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.569 14.009a1.79 1.79 0 1 1-3.581 0 1.79 1.79 0 0 1 3.58 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.232 9.343h.01l.009-.01 5.013-3.14a3.277 3.277 0 0 1 4.505 1.044l1.373 2.19M3 9.428h18"
    />
  </Svg>
);
export default IconlystCardWalletLight;
