import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletFavoriteOutline = ({
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
      d="M21.251 15.156h-3.807a3.281 3.281 0 0 1 0-6.562h3.807a.75.75 0 1 1 0 1.5h-3.807a1.78 1.78 0 1 0 0 3.562h3.807a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M17.264 12.563a.75.75 0 1 1 .284-.059.8.8 0 0 1-.287.059z"
    />
    <Path
      fill={props.color}
      d="M16.317 21.059H12.89a.75.75 0 1 1 0-1.5h3.427a4.19 4.19 0 0 0 4.185-4.187v-6.75a4.19 4.19 0 0 0-4.185-4.184H8.188a4.19 4.19 0 0 0-4.186 4.185v2.048a.75.75 0 1 1-1.5 0V8.623a5.69 5.69 0 0 1 5.686-5.685h8.129a5.69 5.69 0 0 1 5.685 5.685v6.75a5.69 5.69 0 0 1-5.685 5.685"
    />
    <Path
      fill={props.color}
      d="M4.71 21.064a1.03 1.03 0 0 1-.9-.534 1.05 1.05 0 0 1-.11-.67l.272-1.56-1.163-1.106a1.026 1.026 0 0 1-.01-1.463c.155-.15.354-.25.568-.287l1.6-.233.707-1.422a1.034 1.034 0 0 1 1.846-.005l.708 1.424 1.585.23c.27.038.512.182.675.4a1.017 1.017 0 0 1-.112 1.363l-1.137 1.1.274 1.561a1.03 1.03 0 0 1-1.49 1.084l-1.42-.743-1.423.744a1.05 1.05 0 0 1-.47.117m1.686-.976h.007zm.443-.005-.013.007zm-2.28-3.295.631.607a1.03 1.03 0 0 1 .3.914l-.152.867.8-.417a1.02 1.02 0 0 1 .965 0l.781.408-.152-.858a1.01 1.01 0 0 1 .307-.925l.62-.6-.876-.127a1.04 1.04 0 0 1-.776-.564l-.4-.8-.4.8a1.04 1.04 0 0 1-.763.561zm4.52 1.677-.012.01zm.525-1.54h.01zm-.256-.809-.009.008z"
    />
  </Svg>
);
export default IconlystWalletFavoriteOutline;
