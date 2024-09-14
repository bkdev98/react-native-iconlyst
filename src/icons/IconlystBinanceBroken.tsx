import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBinanceBroken = ({
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
      d="M16.853 13.332v1.33l-1.156.672M10.3 19.875 12.25 21l1.948-1.125M4.455 13.125V16.5l2.923 1.688M17.121 18.188l2.923-1.688v-3.375M15.172 4.688 12.249 3 9.326 4.688M4.455 9.75V7.5l1.949-1.125M18.096 6.375 20.044 7.5v2.25M12.249 12l4.605-2.658m-9.21 0 2.303 1.329M12.248 17.317V14.66M13.404 7.399l-1.15-.665-1.161.665M7.645 13.332v1.33l1.156.672"
    />
  </Svg>
);
export default IconlystBinanceBroken;
