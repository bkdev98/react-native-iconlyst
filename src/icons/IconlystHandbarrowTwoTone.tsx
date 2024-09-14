import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandbarrowTwoTone = ({
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
      d="M21.75 6.07h-2.073a.85.85 0 0 0-.831.665l-1.712 7.632H7.976l-2.072-5.16a.85.85 0 0 1 .79-1.169h11.8M8.313 17.593a2.179 2.179 0 1 1-4.357 0 2.179 2.179 0 0 1 4.357 0M6.134 17.484l1.848-3.185"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.62 14.948 1.18 4.22a.679.679 0 0 0 1.331-.2l-.112-4.413M7.426 7.743s1.053-3.405 4.257-3.405 4.256 3.405 4.256 3.405"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHandbarrowTwoTone;
