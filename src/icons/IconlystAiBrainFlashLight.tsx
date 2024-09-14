import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainFlashLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.187 19.315c-.99.52-1.297 2.186-1.297 2.186M11.51 2.503c1.877-.041 3.658.286 5.125 1.523 1.883 1.588 2.984 3.532 2.414 6.115-.304 1.378.701 2.942 1.414 3.9a.75.75 0 0 1-.335 1.174l-.927.358a.83.83 0 0 0-.517.618l-.31 2.644c-.103.685-.686 1.011-1.338.874l-2.785-.628c-.91-.2-.87-1.024-1.108-1.886M4.309 12.863c1.455 2.605 2.127 5.568.884 8.402"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.41 2.682 3.46 6.746a.438.438 0 0 0 .354.696h2.414v2.551c0 .425.544.602.793.258l2.95-4.064a.439.439 0 0 0-.354-.696H7.203V2.939a.438.438 0 0 0-.793-.257"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAiBrainFlashLight;
