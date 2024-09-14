import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserScanLight = ({
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
      d="M21.149 15.531v1.577A3.89 3.89 0 0 1 17.256 21h-1.29M3.15 15.531v1.577A3.89 3.89 0 0 0 7.043 21H8.3M3.15 8.47V6.893A3.89 3.89 0 0 1 7.043 3h1.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.535 9.206a2.386 2.386 0 1 1-4.772 0 2.386 2.386 0 0 1 4.772 0M12.15 13.938c-2.017 0-3.736.304-3.736 1.524s1.71 1.535 3.735 1.535c2.015 0 3.735-.304 3.735-1.524s-1.71-1.536-3.735-1.536"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.15 8.47V6.893A3.89 3.89 0 0 0 17.257 3H16"
    />
  </Svg>
);
export default IconlystUserScanLight;
