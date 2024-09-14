import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletBulkcurved = ({
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
      d="M17.52 15.172a3.316 3.316 0 0 1-3.312-3.312 3.317 3.317 0 0 1 3.313-3.314h4.21c-.878-4.054-3.671-5.585-9.48-5.585C5.015 2.96 2.45 5.327 2.45 12c0 6.674 2.565 9.039 9.8 9.039 5.943 0 8.73-1.6 9.539-5.867z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.902 8.641h-4.06a.75.75 0 0 1 0-1.5h4.06a.75.75 0 0 1 0 1.5M17.52 13.672a1.815 1.815 0 0 1-1.812-1.812c0-1 .813-1.814 1.812-1.814h4.436a20 20 0 0 1 .024 3.626zm.89-1.872a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletBulkcurved;
