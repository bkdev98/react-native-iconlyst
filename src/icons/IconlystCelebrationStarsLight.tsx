import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCelebrationStarsLight = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 8.756a5.52 5.52 0 0 0 3.67 3.671 5.52 5.52 0 0 0-3.67 3.67 5.52 5.52 0 0 0-3.67-3.67 5.52 5.52 0 0 0 3.67-3.67M15.352 8.66l5.164-5.143M14.285 5.488l1.084-2.181M18.881 9.277 21 8.437M12 3.827v.008M8.649 8.66 3.484 3.517M9.715 5.488 8.632 3.307M5.12 9.277 3 8.437M15.352 16.195l5.164 5.143M14.285 19.367l1.084 2.18M18.881 15.577l2.119.841M20.283 12.427v.009M12 21.028v-.009M8.649 16.195l-5.165 5.143M9.715 19.367l-1.083 2.18M5.12 15.577 3 16.418M3.717 12.427v.009"
    />
  </Svg>
);
export default IconlystCelebrationStarsLight;
