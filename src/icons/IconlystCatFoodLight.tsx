import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCatFoodLight = ({
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
      d="m4 19.684.755-4.283a2 2 0 0 1 1.98-1.717h10.53a2 2 0 0 1 1.98 1.717L20 19.684M3 19.684h18M7.447 9.192c1.721-2.42 6.215-6.955 9.106-2.137-2.89 4.818-7.385.282-9.106-2.137"
    />
  </Svg>
);
export default IconlystCatFoodLight;
