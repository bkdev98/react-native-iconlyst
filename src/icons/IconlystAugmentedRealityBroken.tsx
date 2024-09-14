import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAugmentedRealityBroken = ({
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
      d="M13.672 12.548h1.893a1.645 1.645 0 0 0 0-3.29h-1.893v5.484M16.74 14.74l-1.33-2.191M6.791 14.65l2.206-5.298 2.204 5.297"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21H7.783C4.835 21 3 18.919 3 15.974V8.026C3 5.08 4.844 3 7.783 3h8.435C19.166 3 21 5.08 21 8.026v7.948C21 18.919 19.166 21 16.217 21h-.594M7.458 13.17h3.08"
    />
  </Svg>
);
export default IconlystAugmentedRealityBroken;
