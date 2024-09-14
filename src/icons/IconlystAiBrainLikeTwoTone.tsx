import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainLikeTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.58 3.476c-1.144.368-1.55 1.611-1.202 2.701.562 1.745 2.966 3.055 2.966 3.055s2.423-1.33 2.966-3.055c.348-1.09-.062-2.333-1.205-2.701a1.96 1.96 0 0 0-1.76.296 1.95 1.95 0 0 0-1.766-.296"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M15.687 19.315c-.99.52-1.297 2.186-1.297 2.186M12.01 2.503c1.877-.041 3.658.286 5.125 1.523 1.883 1.588 2.984 3.532 2.414 6.115-.304 1.378.702 2.942 1.414 3.9a.75.75 0 0 1-.335 1.174l-.927.358a.83.83 0 0 0-.517.618l-.31 2.644c-.103.685-.686 1.011-1.338.874l-2.785-.628c-.91-.2-.87-1.024-1.108-1.886M4.809 12.863c1.455 2.605 2.127 5.568.884 8.402" />
    </G>
  </Svg>
);
export default IconlystAiBrainLikeTwoTone;
