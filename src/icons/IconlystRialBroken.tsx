import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialBroken = ({
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
      d="M15.195 17.805H12.53M3 13.17v1.348a2.947 2.947 0 1 0 5.892 0v-2.59M8.893 9.126V6.324M17.455 11.103v1.595a2.074 2.074 0 0 1-2.075 2.076h-.978a2.076 2.076 0 0 1-2.076-2.076V6.322M20.503 16.137a3.75 3.75 0 0 1-1.972 1.658M21.001 10.816v2.79"
    />
  </Svg>
);
export default IconlystRialBroken;
