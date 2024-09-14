import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDataStudioBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M19.54 16.01h-8.95c-1.58 0-2.87 1.29-2.87 2.87a2.87 2.87 0 0 0 2.87 2.87h8.95a2.87 2.87 0 0 0 2.87-2.87c0-1.58-1.29-2.87-2.87-2.87M16.227 12c0-1.58-1.29-2.87-2.87-2.87h-8.95c-1.58 0-2.87 1.29-2.87 2.87a2.87 2.87 0 0 0 2.87 2.87h8.95a2.87 2.87 0 0 0 2.87-2.87M10.611 7.99h8.95a2.87 2.87 0 0 0 2.87-2.87c0-1.58-1.29-2.87-2.87-2.87h-8.95c-1.58 0-2.87 1.29-2.87 2.87a2.87 2.87 0 0 0 2.87 2.87" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M22.442 18.84a2.83 2.83 0 1 1-5.66 0 2.83 2.83 0 0 1 5.66 0M16.26 12.04a2.83 2.83 0 1 1-5.66 0 2.83 2.83 0 0 1 5.66 0M22.463 5.08a2.83 2.83 0 1 1-5.66 0 2.83 2.83 0 0 1 5.66 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleDataStudioBulk;
