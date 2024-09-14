import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialLight = ({
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
      d="M15.195 17.803H12.53M3 13.167v1.349a2.947 2.947 0 1 0 5.892 0V6.322M17.455 11.1v1.596a2.075 2.075 0 0 1-2.075 2.076h-.978a2.076 2.076 0 0 1-2.076-2.076V6.32M21 10.816v3.527a3.75 3.75 0 0 1-2.469 3.452"
    />
  </Svg>
);
export default IconlystRialLight;
