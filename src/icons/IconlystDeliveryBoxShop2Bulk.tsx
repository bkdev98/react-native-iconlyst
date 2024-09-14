import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxShop2Bulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.03 10.171c0 .97-.32 1.82-.91 2.41-.56.57-1.33.86-2.22.86l-4.65.02c-1.85 0-3.14-1.34-3.14-3.26l-.01-4.38c-.01-.97.32-1.83.91-2.42.518-.527 1.215-.823 2.021-.865.11-.006.2.084.2.194l.02 3.281a.74.74 0 0 0 .75.75c.08 0 .16-.01.23-.04l1.34-.44 1.33.43c.23.08.48.04.67-.1.2-.15.31-.37.31-.61v-3.28c0-.11.089-.2.2-.195 1.76.091 2.94 1.385 2.94 3.265z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.206 15.726h-11.9a1.04 1.04 0 0 1-1.03-.953l-.96-11.45a.75.75 0 0 0-.62-.676l-2.074-.36a.744.744 0 0 0-.868.61.75.75 0 0 0 .611.868l1.504.26.912 10.873a2.544 2.544 0 0 0 2.517 2.328h11.908a.75.75 0 0 0 0-1.5M14.75 4.972l-.01-2.24a.2.2 0 0 1 .2-.201l1.23-.008a.2.2 0 0 1 .2.2l.01 2.239-.58-.18a.76.76 0 0 0-.47 0zM8.827 19.266c-.679 0-1.23.552-1.23 1.23a1.232 1.232 0 0 0 2.462 0c0-.678-.553-1.23-1.232-1.23M20.204 19.266c-.679 0-1.232.552-1.232 1.23a1.233 1.233 0 0 0 2.464 0c0-.678-.553-1.23-1.232-1.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxShop2Bulk;
