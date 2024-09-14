import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletCloseOutline = ({
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
      d="M17.442 10.094a1.781 1.781 0 1 0 0 3.562h3.807a.75.75 0 0 1 0 1.5h-3.807a3.282 3.282 0 0 1 0-6.562h3.807a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.494 11.816a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.438A4.186 4.186 0 0 0 4 8.622v2.048a.75.75 0 0 1-1.5 0V8.623a5.686 5.686 0 0 1 5.686-5.685h8.128A5.686 5.686 0 0 1 22 8.622v6.75a5.686 5.686 0 0 1-5.686 5.686h-3.426a.75.75 0 0 1 0-1.5h3.426a4.186 4.186 0 0 0 4.186-4.186v-6.75a4.186 4.186 0 0 0-4.186-4.185z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.17 15.392a.75.75 0 0 1 0 1.06l-4.39 4.39a.75.75 0 1 1-1.06-1.061l4.389-4.39a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.72 15.392a.75.75 0 0 1 1.06 0l4.39 4.389a.75.75 0 0 1-1.061 1.06l-4.39-4.389a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletCloseOutline;
