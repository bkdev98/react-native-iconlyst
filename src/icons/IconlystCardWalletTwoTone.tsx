import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletTwoTone = ({
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
      d="M7.82 3.688h9.36a4.32 4.32 0 0 1 4.32 4.32v7.98a4.32 4.32 0 0 1-4.32 4.32H7.82a4.32 4.32 0 0 1-4.32-4.32v-7.98a4.32 4.32 0 0 1 4.32-4.32"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.067 11.997a1.79 1.79 0 1 1-3.581 0 1.79 1.79 0 0 1 3.58 0"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCardWalletTwoTone;
