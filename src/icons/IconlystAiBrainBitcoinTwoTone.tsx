import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainBitcoinTwoTone = ({
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
      <Path d="M15.687 19.315c-.99.52-1.297 2.186-1.297 2.186M12.01 2.503c1.877-.041 3.658.286 5.125 1.523 1.883 1.588 2.984 3.532 2.414 6.115-.304 1.378.702 2.942 1.414 3.9a.75.75 0 0 1-.335 1.174l-.927.358a.83.83 0 0 0-.517.618l-.31 2.644c-.103.685-.686 1.011-1.338.874l-2.785-.628c-.91-.2-.87-1.024-1.108-1.886M4.809 12.863c1.455 2.605 2.127 5.568.884 8.402" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.763 5.922H4.809v2.797h2.014c.817 0 1.47-.702 1.391-1.536-.07-.727-.721-1.261-1.451-1.261"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.763 3.125H4.809v2.797h2.014c.817 0 1.47-.702 1.391-1.536-.07-.727-.721-1.261-1.451-1.261M6.265 9.543V8.72M6.265 3.121v-.824"
    />
  </Svg>
);
export default IconlystAiBrainBitcoinTwoTone;
