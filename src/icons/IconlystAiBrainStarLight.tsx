import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAiBrainStarLight = ({
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
      d="M6.863 4.607 6.234 3.35a.427.427 0 0 0-.757 0l-.63 1.258a.42.42 0 0 1-.32.228L3.12 5.04a.416.416 0 0 0-.234.713l1.018.977c.1.096.146.235.122.37l-.24 1.382a.422.422 0 0 0 .614.44L5.66 8.27a.44.44 0 0 1 .394 0l1.257.652a.423.423 0 0 0 .616-.44L7.685 7.1a.41.41 0 0 1 .122-.37l1.018-.978a.416.416 0 0 0-.235-.714l-1.408-.202a.43.43 0 0 1-.319-.23"
    />
  </Svg>
);
export default IconlystAiBrainStarLight;
