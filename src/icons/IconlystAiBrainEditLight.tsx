import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainEditLight = ({
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
      d="M10.385 9.91a.41.41 0 0 1-.404.403l-1.346.028a1.15 1.15 0 0 1-.84-.337L4.109 6.316c-.45-.45-.45-1.18 0-1.63l.648-.649c.45-.45 1.181-.45 1.631 0l3.688 3.687c.222.222.344.525.337.84z"
    />
    <Path stroke={props.color} strokeWidth={1.5} d="M7.577 5.277 5.35 7.505" />
  </Svg>
);
export default IconlystAiBrainEditLight;
