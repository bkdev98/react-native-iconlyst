import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBinanceLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.603 13.332v1.33l-1.156.672M10.05 19.875 12 21l1.948-1.125M4.205 13.125V16.5l2.923 1.688M16.871 18.188l2.923-1.688v-3.375M14.922 4.688 11.999 3 9.076 4.688M4.205 9.75V7.5l1.949-1.125M17.846 6.375 19.794 7.5v2.25M7.394 9.342 12 12l4.605-2.658M11.998 17.317V12M13.154 7.399l-1.15-.665-1.161.665M7.395 13.332v1.33l1.156.672"
    />
  </Svg>
);
export default IconlystBinanceLight;
