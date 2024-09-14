import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFingerprintScanLight = ({
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
      d="M13.835 16.552A3.401 3.401 0 0 1 8.6 13.686v-2.807a3.4 3.4 0 0 1 6.8 0v2.807M11.999 13.629v-2.537M2.999 15.815v1.577a3.893 3.893 0 0 0 3.893 3.891h1.257M21 15.815v1.577a3.893 3.893 0 0 1-3.894 3.891h-1.289M2.999 8.752V7.175a3.89 3.89 0 0 1 3.893-3.892h1.289M21 8.752V7.175a3.89 3.89 0 0 0-3.892-3.892H15.85"
    />
  </Svg>
);
export default IconlystFingerprintScanLight;
