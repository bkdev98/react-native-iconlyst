import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandbarrowLight = ({
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
      d="M21.147 6.015h-2.073a.85.85 0 0 0-.831.665l-1.712 7.632H7.373L5.3 9.152a.85.85 0 0 1 .79-1.169h11.8M7.71 17.538a2.178 2.178 0 1 1-4.357 0 2.178 2.178 0 0 1 4.357 0M5.53 17.43l1.849-3.185M14.016 14.893l1.18 4.22a.678.678 0 0 0 1.332-.2l-.112-4.413"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.823 7.689s1.053-3.406 4.257-3.406 4.256 3.406 4.256 3.406"
    />
  </Svg>
);
export default IconlystHandbarrowLight;
