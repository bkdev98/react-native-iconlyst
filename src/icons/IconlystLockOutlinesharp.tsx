import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockOutlinesharp = ({
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
      d="M7.008 7.744a5.3 5.3 0 0 1 5.322-5.278c2.926.001 5.3 2.375 5.3 5.301v2.682h-1.5V7.767a3.8 3.8 0 0 0-3.802-3.8h-.003a3.8 3.8 0 0 0-3.817 3.782v2.7h-1.5zM12.931 13.919v3.72h-1.5v-3.72z"
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
export default IconlystLockOutlinesharp;
