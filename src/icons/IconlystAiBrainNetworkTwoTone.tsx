import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainNetworkTwoTone = ({
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
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M15.687 19.315c-.99.52-1.297 2.186-1.297 2.186" />
      <Path d="M5.694 21.264c1.242-2.834.57-5.797-.885-8.401-1.04-1.863-1.27-3.86-.39-5.886C5.725 3.963 8.88 2.573 12.01 2.503c1.877-.041 3.658.286 5.125 1.523 1.883 1.588 2.984 3.532 2.414 6.115-.304 1.378.702 2.942 1.414 3.9a.75.75 0 0 1-.334 1.174l-.928.358a.83.83 0 0 0-.517.618l-.31 2.644c-.103.685-.686 1.011-1.338.874l-2.784-.628c-.91-.2-.871-1.024-1.109-1.886" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.805 12.824v.041M8.11 8.36a5.916 5.916 0 0 1 7.386 0M9.926 10.643a2.92 2.92 0 0 1 3.761-.006"
    />
  </Svg>
);
export default IconlystAiBrainNetworkTwoTone;
