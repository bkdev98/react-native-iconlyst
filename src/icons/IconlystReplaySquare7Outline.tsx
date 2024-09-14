import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReplaySquare7Outline = ({
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
      d="M5.997 4.602a.75.75 0 0 1 .53.22l2.997 2.996a.75.75 0 1 1-1.06 1.061L5.997 6.412 3.53 8.88a.75.75 0 1 1-1.06-1.06L5.467 4.82a.75.75 0 0 1 .53-.22M14.466 15.118a.75.75 0 0 1 1.06 0l2.468 2.467 2.476-2.468a.75.75 0 0 1 1.059 1.063l-3.006 2.997a.75.75 0 0 1-1.06-.001l-2.997-2.997a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.996 4.602a.75.75 0 0 1 .75.75v9.189a3.354 3.354 0 0 0 3.354 3.354H12a.75.75 0 0 1 0 1.5h-1.9a4.854 4.854 0 0 1-4.854-4.854V5.35a.75.75 0 0 1 .75-.75M11.25 5.352a.75.75 0 0 1 .75-.75h1.89a4.854 4.854 0 0 1 4.854 4.854v9.189a.75.75 0 0 1-1.5 0v-9.19a3.354 3.354 0 0 0-3.354-3.353H12a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReplaySquare7Outline;
