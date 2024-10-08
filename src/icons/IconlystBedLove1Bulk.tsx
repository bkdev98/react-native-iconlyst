import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBedLove1Bulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M5.924 4.195a.75.75 0 0 1 .75.75v1.548c1.59-.468 2.897-.715 3.44-.788a.75.75 0 1 1 .201 1.486c-.508.069-1.93.337-3.641.87v4.196a.75.75 0 0 1-1.5 0V4.946a.75.75 0 0 1 .75-.75M20.248 4.945a.75.75 0 0 0-1.5 0v1.548c-1.59-.468-2.897-.715-3.44-.788a.75.75 0 0 0-.201 1.486c.508.069 1.93.337 3.641.87v4.196a.75.75 0 0 0 1.5 0V4.946M20.248 18.257a.75.75 0 0 0-1.5 0v1.522a.75.75 0 0 0 1.5 0zM6.674 18.257a.75.75 0 0 0-1.5 0v1.522a.75.75 0 0 0 1.5 0z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.457 3.486a1.5 1.5 0 0 0-.595.192l-.145.083-.155-.084c-.25-.135-.49-.19-.826-.19-.384 0-.595.044-.904.185-.654.3-1.062.853-1.196 1.62-.132.758.054 1.437.59 2.15.48.64 1.355 1.338 2.18 1.738.29.14.396.131.75-.063.827-.454 1.545-1.039 2.02-1.644.427-.548.614-1.015.641-1.603.036-.781-.21-1.43-.712-1.877a2.2 2.2 0 0 0-1.648-.507M5.991 11.81c-.461.1-.775.238-1.225.536a3.44 3.44 0 0 0-1.515 2.504c-.022.213-.033.736-.025 1.278.012.898.014.922.103 1.178.25.713.798 1.209 1.524 1.378.19.045 1.144.05 7.854.05 4.9-.001 7.697-.013 7.805-.034a2.19 2.19 0 0 0 1.445-1.069c.209-.391.238-.598.238-1.69 0-1.088-.026-1.36-.171-1.798a3.56 3.56 0 0 0-2.347-2.274c-.268-.067-.418-.102-.712-.094l-6.175-.005c-5.522-.005-6.62.001-6.799.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBedLove1Bulk;
