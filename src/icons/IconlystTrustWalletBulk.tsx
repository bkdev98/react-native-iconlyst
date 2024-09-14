import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTrustWalletBulk = ({
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
      d="M12.5 2.5a.5.5 0 0 0-.33.115C9.468 4.87 6.437 4.877 5.224 4.88H4.99a.5.5 0 0 0-.356.149.5.5 0 0 0-.144.357c.16 11.256 1.114 12.236 4.735 14.203.854.463 1.824.99 2.972 1.817a.5.5 0 0 0 .293.094h.009z"
    />
    <Path
      fill={props.color}
      d="M12.5 21.5v-19c.11.002.22.04.31.115 2.683 2.244 5.717 2.259 6.945 2.265h.254a.5.5 0 0 1 .5.506c-.172 11.22-1.204 12.274-4.752 14.201-.857.464-1.826.991-2.974 1.818a.5.5 0 0 1-.283.094"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystTrustWalletBulk;
