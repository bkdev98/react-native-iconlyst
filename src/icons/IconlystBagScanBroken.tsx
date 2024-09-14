import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagScanBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 8.47V6.891A3.89 3.89 0 0 0 17.107 3H15.85M3 8.47V6.891A3.89 3.89 0 0 1 6.893 3h1.29M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.108 21h-1.29M9.744 16.808c-1.575 0-2.555-1.112-2.555-2.685V9.876c0-1.574.985-2.687 2.555-2.687h4.508c1.576 0 2.556 1.113 2.556 2.687v4.247c0 1.573-.98 2.685-2.556 2.685h-.889"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.914 10.299a1.913 1.913 0 1 1-3.826 0"
    />
  </Svg>
);
export default IconlystBagScanBroken;
