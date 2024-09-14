import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessRemoveErrorBroken = ({
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
      d="M11.923 18.83a2.265 2.265 0 0 1 3.114 0M14.264 13.938c1.428.17 2.731.8 3.723 1.732M8.986 15.669a6.6 6.6 0 0 1 2.31-1.405M5.988 12.447a10.92 10.92 0 0 1 7.496-2.955M3.043 9.273a15.28 15.28 0 0 1 10.44-4.103M21.042 10.484l-3.948-3.949M21.042 6.535l-3.948 3.949"
    />
  </Svg>
);
export default IconlystWirelessRemoveErrorBroken;
