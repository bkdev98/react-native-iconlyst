import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLike5Broken = ({
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
      d="M6.725 15.203v2.303c0 1.036 0 1.554-.199 1.952a1.88 1.88 0 0 1-.842.842c-.397.198-.915.198-1.95.198M3.733 8.477c1.036 0 1.554 0 1.951.198.365.182.66.478.842.842.2.397.2.915.2 1.952M12.619 20.458l-1.44-.012c-1.542 0-3.066-.942-4.452-1.516M6.727 9.732c1.43 0 3.602-1.51 4.447-5.311.109-.487.234-.726.75-.921 3.657 0 2.9 5.03 2.068 6.389h2.616c3.878 0 3.657 3.014 3.657 5.989 0 2.851-1.831 4.57-4.491 4.57"
    />
  </Svg>
);
export default IconlystThumbLike5Broken;
