import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDrawerOutline = ({
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
      d="M3.424 4.89c.782-.84 1.891-1.303 3.187-1.303h10.777c1.299 0 2.408.463 3.19 1.303.776.833 1.172 1.976 1.172 3.242v6.002c0 1.266-.396 2.409-1.172 3.242-.782.84-1.892 1.302-3.19 1.302H6.61c-1.299 0-2.408-.463-3.19-1.302-.775-.833-1.171-1.976-1.171-3.242V8.132c0-1.267.398-2.41 1.174-3.243m1.098 1.022c-.475.509-.772 1.264-.772 2.22v6.002c0 .957.296 1.711.77 2.22.467.502 1.163.824 2.09.824h10.777c.929 0 1.625-.322 2.093-.824.474-.509.77-1.263.77-2.22V8.132c0-.957-.296-1.712-.77-2.22-.468-.503-1.164-.825-2.092-.825H6.611c-.924 0-1.62.322-2.09.825"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.518 17.053a.75.75 0 0 1 .75.75v1.86a.75.75 0 0 1-1.5 0v-1.86a.75.75 0 0 1 .75-.75M18.482 17.053a.75.75 0 0 1 .75.75v1.86a.75.75 0 0 1-1.5 0v-1.86a.75.75 0 0 1 .75-.75M10.22 14.59a.75.75 0 0 1 .75-.75h2.06a.75.75 0 0 1 0 1.5h-2.06a.75.75 0 0 1-.75-.75M10.22 7.95a.75.75 0 0 1 .75-.75h2.06a.75.75 0 0 1 0 1.5h-2.06a.75.75 0 0 1-.75-.75M2.25 11.501a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDrawerOutline;
