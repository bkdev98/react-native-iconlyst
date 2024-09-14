import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletSearchOutline = ({
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
      d="M17.443 10.094a1.78 1.78 0 1 0 0 3.562h3.807a.75.75 0 1 1 0 1.5h-3.807a3.28 3.28 0 0 1 0-6.562h3.807a.75.75 0 1 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.493 11.82a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.438A4.185 4.185 0 0 0 4 8.622v2.047a.75.75 0 0 1-1.5 0V8.623a5.685 5.685 0 0 1 5.686-5.685h8.128A5.685 5.685 0 0 1 22 8.622v6.75a5.686 5.686 0 0 1-5.686 5.685h-3.426a.75.75 0 0 1 0-1.5h3.426a4.185 4.185 0 0 0 4.186-4.185v-6.75a4.185 4.185 0 0 0-4.186-4.185z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.417 13.656a3.88 3.88 0 1 1 5.487 5.487 3.88 3.88 0 0 1-5.487-5.487m4.426 1.06a2.38 2.38 0 1 0-3.365 3.366 2.38 2.38 0 0 0 3.365-3.366"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.476 18.083a.75.75 0 0 1 0 1.06L3.78 20.84a.75.75 0 1 1-1.06-1.061l1.696-1.696a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletSearchOutline;
