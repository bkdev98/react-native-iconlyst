import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletOutOutline = ({
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
      d="M17.44 10.094a1.78 1.78 0 1 0 0 3.562h3.808a.75.75 0 0 1 0 1.5h-3.807a3.28 3.28 0 0 1 0-6.562h3.807a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.492 11.82a.75.75 0 0 1 .75-.75h.003a.75.75 0 0 1 0 1.5h-.003a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.186 4.438A4.186 4.186 0 0 0 4 8.622v2.988a.75.75 0 0 1-1.5 0V8.623a5.686 5.686 0 0 1 5.686-5.685h8.128A5.686 5.686 0 0 1 22 8.622v6.75a5.686 5.686 0 0 1-5.686 5.686h-3.426a.75.75 0 0 1 0-1.5h3.426a4.186 4.186 0 0 0 4.186-4.186v-6.75a4.186 4.186 0 0 0-4.186-4.185z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.447 15.11a.75.75 0 0 1 0 1.061L3.78 20.837a.75.75 0 0 1-1.06-1.06l4.666-4.667a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.26 15.805a.75.75 0 0 1 .748.751l-.006 3.004 3.003-.006a.75.75 0 1 1 .003 1.5l-3.756.007a.75.75 0 0 1-.752-.751l.008-3.757a.75.75 0 0 1 .751-.748"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletOutOutline;
