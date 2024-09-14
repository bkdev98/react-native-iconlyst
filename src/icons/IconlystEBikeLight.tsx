import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEBikeLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M14.165 14.195a3.543 3.543 0 1 0 7.085 0 3.543 3.543 0 0 0-7.085 0M16.121 8.907H9.247c0 1.952-.282 3.388-2.062 5.145"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.708 14.052-2.74-9.13 2.236-.95M9.004 6.406H6.35M9.25 8.907l-1.825-2.5M10.969 14.161a3.51 3.51 0 0 0-3.509-3.509 4.21 4.21 0 0 0-4.21 4.21c0 3.489 2.828 5.745 6.316 5.745h.35m1.051-6.446A3.51 3.51 0 0 1 7.46 17.67"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.298 21.798h-1.19a1.19 1.19 0 0 1 0-2.381h1.19m0 2.38v-2.38m0 2.38h1.387m-1.387-2.38h1.387"
    />
  </Svg>
);
export default IconlystEBikeLight;
