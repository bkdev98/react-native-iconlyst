import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUnlockOutlinesharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.008 7.744a5.3 5.3 0 0 1 5.322-5.278c1.524 0 2.899.646 3.864 1.675l.514.547-1.094 1.026-.513-.547a3.8 3.8 0 0 0-2.773-1.2h-.003a3.8 3.8 0 0 0-3.817 3.782v2.7h-1.5zM12.931 13.919v3.72h-1.5v-3.72z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.956 22.466V9.093H20.68v13.373zm1.5-1.5H19.18V10.593H5.456z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUnlockOutlinesharp;
