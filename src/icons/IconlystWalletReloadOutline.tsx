import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletReloadOutline = ({
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
      d="M17.44 9.879a1.78 1.78 0 1 0 0 3.562h3.808a.75.75 0 0 1 0 1.5h-3.807a3.28 3.28 0 0 1 0-6.562h3.807a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.494 11.602a.75.75 0 0 1 .75-.75h.003a.75.75 0 1 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.223A4.186 4.186 0 0 0 4 8.409v2.047a.75.75 0 0 1-1.5 0V8.409a5.686 5.686 0 0 1 5.686-5.686h8.128A5.686 5.686 0 0 1 22 8.409v6.75a5.686 5.686 0 0 1-5.686 5.685h-3.426a.75.75 0 0 1 0-1.5h3.426a4.186 4.186 0 0 0 4.186-4.186v-6.75a4.186 4.186 0 0 0-4.186-4.185z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.5 14.777a2.5 2.5 0 1 0 2.141 3.794.75.75 0 0 1 1.283.778A4 4 0 0 1 2.5 17.278a4 4 0 0 1 7.576-1.798.75.75 0 1 1-1.34.675 2.5 2.5 0 0 0-2.235-1.378"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.405 13.277a.75.75 0 0 1 .75.75v1.79a.75.75 0 0 1-.75.75h-1.8a.75.75 0 1 1 0-1.5h1.05v-1.04a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletReloadOutline;
