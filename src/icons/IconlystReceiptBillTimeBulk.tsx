import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillTimeBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M11.583 8.424H6.727a.75.75 0 1 1 0-1.5h4.856a.75.75 0 0 1 0 1.5m-1.62 3.772H6.728a.749.749 0 1 1 0-1.5h3.237a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M9.225 20.851a4.1 4.1 0 0 0 1.849.291c.287-.022.412-.35.265-.598a6.2 6.2 0 0 1-.867-3.166c0-3.424 2.789-6.21 6.216-6.21.498 0 .982.06 1.446.17.266.064.535-.13.535-.404l-.006-4.357c0-2.77-1.586-4.425-4.242-4.425h-7.3c-2.631 0-4.265 1.696-4.265 4.425l-.01 12.254c-.001.59.296 1.13.794 1.444a1.69 1.69 0 0 0 1.644.095l.758-.364a1.28 1.28 0 0 1 1.04-.03z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M17.457 18.993a.75.75 0 0 0 .767-1.29l-.809-.481v-1.084a.75.75 0 0 0-1.5 0v1.51a.75.75 0 0 0 .366.644z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.222 17.378a4.473 4.473 0 0 0 4.466 4.47 4.473 4.473 0 0 0 4.467-4.47 4.47 4.47 0 0 0-4.467-4.46 4.47 4.47 0 0 0-4.466 4.46m1.5 0a2.967 2.967 0 0 1 5.933 0 2.97 2.97 0 0 1-2.967 2.97 2.97 2.97 0 0 1-2.966-2.97"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillTimeBulk;
