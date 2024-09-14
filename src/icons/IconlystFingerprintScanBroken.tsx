import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFingerprintScanBroken = ({
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
      d="M3.25 8.47V6.892A3.893 3.893 0 0 1 7.143 3h1.29M3.25 15.531v1.577A3.89 3.89 0 0 0 7.143 21H8.4M21.25 15.531v1.577A3.89 3.89 0 0 1 17.358 21h-1.29M21.25 8.47V6.892A3.893 3.893 0 0 0 17.357 3H16.1M8.139 9.738a4.727 4.727 0 0 1 5.936-2.03M7.521 15.586v-2.93M16.117 9.348c.544.769.863 1.709.863 2.724v3.512M14.073 16.659v-4.413a1.863 1.863 0 1 0-3.725 0v.5M10.348 16.656V14.98"
    />
  </Svg>
);
export default IconlystFingerprintScanBroken;
