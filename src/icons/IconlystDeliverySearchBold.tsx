import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliverySearchBold = ({
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
      d="M11.823 8.255a.75.75 0 0 1 .467-.001l1.848.6-.012-6.801a.3.3 0 0 0-.3-.3l-3.575.008a.3.3 0 0 0-.3.3L9.96 8.87z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.19 11.158c.677 0 1.327.093 1.94.274.2.06.41-.087.409-.296l-.01-3.878c-.01-1.64-.56-3.09-1.55-4.08-.94-.94-2.23-1.43-3.72-1.43h-.329a.3.3 0 0 0-.3.3l.01 7.84c0 .24-.11.46-.31.61-.19.14-.44.18-.67.1l-2.6-.84-2.61.86a.767.767 0 0 1-.68-.1.77.77 0 0 1-.31-.61l-.01-7.84a.3.3 0 0 0-.3-.3h-.34c-3.14.01-5.26 2.22-5.26 5.51v.02l.02 7.94c0 1.59.49 2.96 1.42 3.95.96 1.02 2.28 1.56 3.84 1.56h.03l4.32-.009a.315.315 0 0 0 .292-.414 6.9 6.9 0 0 1-.332-2.117c0-3.89 3.16-7.05 7.05-7.05"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.14 19.24-.002.001v.002a2.46 2.46 0 0 1-3.456 0 2.45 2.45 0 0 1 0-3.46 2.42 2.42 0 0 1 1.728-.719c.653 0 1.267.255 1.728.718.951.953.951 2.504.002 3.458m2.79 1.731-1.255-1.253a3.96 3.96 0 0 0-.475-4.996 3.92 3.92 0 0 0-2.789-1.158 3.92 3.92 0 0 0-2.79 1.158 3.954 3.954 0 0 0 .002 5.582 3.94 3.94 0 0 0 2.787 1.145c.771 0 1.54-.226 2.204-.67l1.255 1.253a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliverySearchBold;
