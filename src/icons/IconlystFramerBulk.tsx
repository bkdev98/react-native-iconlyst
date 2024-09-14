import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFramerBulk = ({
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
      d="M12.047 8.875c1.651 1.649 4.524 4.486 6.06 6.037a.64.64 0 0 1-.458 1.09h-4.976a.64.64 0 0 0-.64.641v4.973a.64.64 0 0 1-1.09.457 1033 1033 0 0 1-5.735-5.694c-.156-.157-.34-.385-.342-.581-.02-2.074-.016-4.16-.015-6.28 0-.354.287-.643.641-.643z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.047 8.875a6499 6499 0 0 0-6.056-6.04.641.641 0 0 1 .453-1.095H18.51c.354 0 .641.287.641.641v5.853a.64.64 0 0 1-.64.641z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFramerBulk;
