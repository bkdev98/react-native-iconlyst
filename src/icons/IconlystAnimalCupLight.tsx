import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalCupLight = ({
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
      d="M11.996 14.94v2.697m-3.98 2.772.887-2.773h6.337l.887 2.773m1.617 0H6.4m11.65-16.216H5.95s.007 10.746 6.053 10.746c6.048 0 6.048-10.746 6.048-10.746"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.054 5.953h-3.03S2.596 9.752 5.401 11.6M17.945 5.953h3.031s.426 3.799-2.379 5.646M12.064 6.366V6.33m-.004-.107a.158.158 0 1 0 .002.315.158.158 0 0 0-.002-.315M14.35 7.526V7.49m-.005-.107a.158.158 0 1 0 .002.315.158.158 0 0 0-.002-.315M9.789 7.526V7.49m-.005-.107a.158.158 0 1 0 .002.315.158.158 0 0 0-.002-.315"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.069 11.123c.957 0 2.171.83 2.154-.447-.007-.958-1.005-1.857-2.155-1.858-1.156 0-2.305.977-2.145 1.973.176 1.154 1.297.332 2.146.332Z"
    />
  </Svg>
);
export default IconlystAnimalCupLight;
