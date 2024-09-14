import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTreeOutline = ({
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
      d="M2.5 18.674a2.732 2.732 0 1 1 5.464 0 2.732 2.732 0 0 1-5.464 0m2.732-1.232a1.232 1.232 0 1 0 0 2.465 1.232 1.232 0 0 0 0-2.465M16.535 18.674a2.732 2.732 0 1 1 5.465 0 2.732 2.732 0 0 1-5.465 0m2.732-1.232a1.232 1.232 0 1 0 0 2.465 1.232 1.232 0 0 0 0-2.465M9.518 18.675a2.731 2.731 0 1 1 5.462 0 2.731 2.731 0 0 1-5.462 0m2.732-1.232a1.231 1.231 0 1 0-.002 2.463 1.231 1.231 0 0 0 .002-2.463M7.755 4.094a1.773 1.773 0 0 0 0 3.546h9.26a1.773 1.773 0 0 0 0-3.546zM4.482 5.867a3.273 3.273 0 0 1 3.273-3.273h9.26a3.273 3.273 0 0 1 0 6.546h-9.26a3.273 3.273 0 0 1-3.273-3.273"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.238 13.432c-.693 0-1.256.562-1.256 1.255v2.005a.75.75 0 0 1-1.5 0v-2.005a2.756 2.756 0 0 1 2.756-2.755h10.025a2.756 2.756 0 0 1 2.756 2.755v2.005a.75.75 0 0 1-1.5 0v-2.005c0-.693-.563-1.255-1.256-1.255z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 7.64a.75.75 0 0 1 .75.75v8.303a.75.75 0 0 1-1.5 0V8.391a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerTreeOutline;
