import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel2Bulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} opacity={0.4}>
      <Path d="M18.532 18.84a3 3 0 0 0 2.967-2.552v5.414a.505.505 0 0 1-.651.477 4 4 0 0 1-.694-.316c-.366-.194-.727-.386-1.18-.386-.554 0-.806.15-1.124.341-.518.311-1.042.491-1.654.491-.53 0-.975-.212-1.417-.422-.433-.206-.862-.41-1.362-.41-.558 0-.812.151-1.13.342l-.006.003c-.375.225-.818.488-1.65.488-.828 0-1.27-.264-1.643-.488l-.004-.003c-.318-.19-.572-.342-1.13-.342-.408 0-.755.116-1.097.323-.21.126-.493.296-.83.396a.505.505 0 0 1-.641-.48V18.84z" />
      <Path d="M5.614 3.389h12.77c-.628 0-1.154.315-1.557.733-.401.415-.728.977-.986 1.61-.519 1.269-.822 2.97-.822 4.812 0 1.84.303 3.542.822 4.811.258.633.585 1.195.986 1.61.395.409.908.72 1.519.732H5.614c-.628 0-1.154-.315-1.557-.732-.401-.416-.727-.977-.986-1.61-.518-1.27-.821-2.97-.821-4.812 0-1.84.303-3.543.821-4.812.258-.633.585-1.194.986-1.61.403-.417.93-.732 1.557-.732" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.928 5.731c.518 1.27.822 2.971.822 4.812s-.304 3.543-.822 4.812c-.259.633-.585 1.194-.987 1.61-.403.417-.93.732-1.557.732-.628 0-1.154-.315-1.557-.732-.401-.416-.728-.977-.986-1.61a10.7 10.7 0 0 1-.619-2.27h-1.097a.75.75 0 0 1 0-1.5h.927q-.033-.511-.033-1.042c0-1.84.303-3.543.822-4.812.258-.633.585-1.194.986-1.61.403-.417.93-.732 1.557-.732.628 0 1.154.315 1.558.732.4.416.727.977.986 1.61m-3.112 6.015a.75.75 0 0 0 1.447-.398 3.46 3.46 0 0 1 0-1.864.75.75 0 1 0-1.447-.395c-.243.89-.24 1.78 0 2.656"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M2.283 11.586q.05.78.17 1.5h2.072a.75.75 0 0 0 0-1.5zM11.613 13.086a.75.75 0 0 0 0-1.5H10.48a.75.75 0 0 0 0 1.5zM8.678 12.336a.75.75 0 0 1-.75.75H6.836a.75.75 0 0 1 0-1.5h1.092a.75.75 0 0 1 .75.75"
    />
  </Svg>
);
export default IconlystTowel2Bulk;