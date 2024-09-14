import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCarrdRemoveBold = ({
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
      d="M22.375 7.826c0-2.793-1.794-4.67-4.464-4.67H7.84c-2.67 0-4.463 1.877-4.463 4.67v.08a.3.3 0 0 0 .3.3h18.398a.3.3 0 0 0 .3-.3zM3.676 9.708a.3.3 0 0 0-.3.3v2.355c0 .186.169.345.354.345h.042c3.45 0 6.034 2.51 6.034 5.96v.026c0 .195.18.384.374.384h7.726c2.67 0 4.47-1.88 4.47-4.67v-4.4a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.701 15.769a.75.75 0 0 0-1.06 0l-1.369 1.368-1.367-1.367a.75.75 0 1 0-1.06 1.06l1.366 1.368-1.368 1.368a.749.749 0 1 0 1.061 1.06l1.368-1.368 1.367 1.367a.75.75 0 0 0 1.061 0 .75.75 0 0 0 0-1.06l-1.367-1.367 1.368-1.368a.75.75 0 0 0 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBankCarrdRemoveBold;
