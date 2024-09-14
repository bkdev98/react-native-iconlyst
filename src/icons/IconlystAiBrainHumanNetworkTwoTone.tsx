import * as React from 'react';
import Svg, { Circle, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainHumanNetworkTwoTone = ({
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
    <Circle
      cx={5.792}
      cy={4.839}
      r={1.917}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Circle
      cx={10.584}
      cy={9.63}
      r={1.917}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.179 6.168 2.06 2.06"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M15.647 19.315c-.99.52-1.297 2.186-1.297 2.186M11.97 2.503c1.877-.041 3.659.286 5.125 1.523 1.883 1.588 2.985 3.532 2.414 6.115-.304 1.378.702 2.942 1.415 3.9a.75.75 0 0 1-.335 1.174l-.928.358a.83.83 0 0 0-.517.618l-.31 2.644c-.103.685-.686 1.011-1.338.874l-2.784-.628c-.91-.2-.87-1.024-1.109-1.886M4.769 12.863c1.455 2.605 2.127 5.568.884 8.402" />
    </G>
  </Svg>
);
export default IconlystAiBrainHumanNetworkTwoTone;
