import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel4Bulk = ({
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
      <Path d="M18.532 18.84a3 3 0 0 0 2.967-2.552v5.414a.505.505 0 0 1-.651.477 4 4 0 0 1-.694-.316c-.366-.194-.727-.386-1.18-.386-.554 0-.805.15-1.123.341-.519.311-1.043.491-1.655.491-.53 0-.975-.212-1.416-.422-.433-.206-.863-.41-1.363-.41-.558 0-.812.151-1.13.342l-.006.003c-.375.225-.818.488-1.65.488-.828 0-1.27-.264-1.643-.488l-.004-.003c-.318-.19-.572-.342-1.13-.342-.408 0-.755.116-1.097.323-.21.126-.492.296-.83.396a.505.505 0 0 1-.641-.48V18.84z" />
      <Path d="M5.615 3.389h12.77c-.628 0-1.155.315-1.558.733-.401.415-.728.977-.986 1.61-.518 1.269-.822 2.97-.822 4.812 0 1.84.303 3.542.822 4.811.258.633.585 1.195.986 1.61.395.409.908.72 1.519.732H5.615c-.628 0-1.155-.315-1.558-.732-.4-.416-.727-.977-.986-1.61-.518-1.27-.82-2.97-.82-4.812 0-1.84.302-3.543.82-4.812.259-.633.585-1.194.986-1.61.403-.417.93-.732 1.558-.732" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.75 10.544c0-1.84-.304-3.543-.822-4.812-.259-.633-.585-1.194-.986-1.61-.403-.417-.93-.732-1.558-.732s-1.154.315-1.557.732c-.401.416-.728.977-.986 1.61-.519 1.27-.822 2.971-.822 4.812s.303 3.543.822 4.812c.258.633.585 1.194.986 1.61.403.417.93.732 1.557.732.628 0 1.155-.315 1.558-.733.4-.415.727-.976.986-1.61.518-1.268.822-2.97.822-4.81m-3.012 1.727a.75.75 0 0 1-.921-.525 4.96 4.96 0 0 1-.001-2.656.75.75 0 0 1 1.447.395 3.46 3.46 0 0 0 0 1.864.75.75 0 0 1-.525.922"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowel4Bulk;
